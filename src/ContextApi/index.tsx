import {createContext, useEffect, useState} from 'react';
import {ReactNode} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../Firebase/connectionApi';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {Alert} from 'react-native';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
} from 'firebase/firestore';
import {db} from '../Firebase/connectionApi';
import {deleteDoc} from 'firebase/firestore';
import {signOut} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'

import {Document,RegisterProps,TypeList,User,ChildrenProps,PropsChildren} from './types'

export const AuthContext = createContext({} as ChildrenProps);

export default function Context({children}: PropsChildren) {
  const [user, setUser] = useState<User>({
    email: '',
    uid: '',
  });
  const logado = user?.email && user?.uid;

  const [listAgendas, setListAgendas] = useState<TypeList[]>([]);

  useEffect(() => {

    async function VerUser() {
      try{
        AsyncStorage.getItem('@dadosAppBarber').then((data) => {
          if (data) {
            setUser(JSON.parse(data));
          }
        });
      }
      catch{
        Alert.alert('erro')
      }
    }

    VerUser()

    async function HendleAgendas() {
      const ref = collection(db, 'Agendas');
      getDocs(ref).then(snapshot => {
        let lista: TypeList[] = [];

        snapshot.forEach(doc => {
          lista.push({
            cliente: doc.data().cliente,
            serviço: doc.data().serviço,
            valor: doc.data().valor,
            horario: doc.data().horario,
            uid: doc.id,
          });
        });

        setListAgendas(lista);
      });
    }

    HendleAgendas();

     
  }, [AddDocument]);

  async function Register({email, senha}: RegisterProps) {
    const data = await createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        Alert.alert('foi');
      })
      .catch(() => {
        Alert.alert('erro');
      });
  }

  async function Login({email, senha}: RegisterProps) {
    try {
      const data = await signInWithEmailAndPassword(auth, email, senha);
      Alert.alert('ok');
      setUser({
        email: data.user.email,
        uid: data.user.uid,
      });

     const res = {
      email: data.user.email,
        uid: data.user.uid,
     }

       AsyncStorage.setItem('@dadosAppBarber', JSON.stringify(res))
    } catch (ert) {
      Alert.alert('err');
    }
  }

  async function AddDocument({serviço, horario, valor, cliente}: Document) {
    try {
      const response = await addDoc(collection(db, 'Agendas'), {
        cliente: cliente,
        serviço: serviço,
        valor: valor,
        horario: horario,
      });
      Alert.alert('ok');
    } catch (err) {
      Alert.alert('deu erro');
      console.log(err);
    }
  }

  async function deletarAgenda({uid}: {uid: string}) {
    try {
      const data = doc(db, 'Agendas', uid);
      await deleteDoc(data);
    } catch {
      Alert.alert('erro');
    }
  }

  async function LogOut() {
    AsyncStorage.clear()
    signOut(auth)
      .then(() => {
        Alert.alert('saiu');
      })
      .catch(() => {
        Alert.alert('erro');
      });
    setUser({
      email: '',
      uid: '',
    });
  }

  return (
    <AuthContext.Provider
      value={{
        Register,
        Login,
        user,
        logado,
        AddDocument,
        listAgendas,
        deletarAgenda,
        LogOut,
        
      }}>
      {children}
    </AuthContext.Provider>
  );
}
