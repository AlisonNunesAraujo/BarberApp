import {createContext, useEffect, useState} from 'react';
import {ReactNode} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../Firebase/connectionApi';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {Alert, FlatList} from 'react-native';
import {collection, addDoc, getDocs, query, where, doc} from 'firebase/firestore';
import {db} from '../Firebase/connectionApi';
import { deleteDoc } from 'firebase/firestore';

interface PropsChildren {
  children: ReactNode;
}

type ChildrenProps = {
  Register: (info: RegisterProps) => Promise<void>;
  Login: (info: RegisterProps) => Promise<void>;
  user: {email: string; uid: string};
  logado: boolean;
  AddDocument: (info: Document) => Promise<void>;
  listAgendas: TypeList[];
  deletarAgenda: (info: {uid: string}) => Promise<void>
};

type RegisterProps = {
  email: string;
  senha: string;
};

type User = {
  email: string | any;
  uid: string;
};

type Document = {
  cliente: string;
  serviço: string;
  valor: string;
  horario: string;
};

export interface TypeList {
  cliente: string;
  serviço: string;
  valor: string;
  horario: string;
  uid: string
}

export const AuthContext = createContext({} as ChildrenProps);

export default function Context({children}: PropsChildren) {
  const [user, setUser] = useState<User>({
    email: '',
    uid: '',
  });
  const logado = user?.email && user?.uid;

  const [listAgendas, setListAgendas] = useState<TypeList[]>([]);

  useEffect(() => {
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
            uid: doc.id
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

  async function deletarAgenda({uid}: {uid:string}){
    try{
      const data =  doc(db, 'Agendas', uid)
      await deleteDoc(data)
    }
    catch{
      Alert.alert('erro')
    }
  } 

  return (
    <AuthContext.Provider
      value={{Register, Login, user, logado, AddDocument, listAgendas,deletarAgenda}}>
      {children}
    </AuthContext.Provider>
  );
}
