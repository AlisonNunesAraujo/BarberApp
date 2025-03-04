import {createContext, useEffect, useState} from 'react';
import {ReactNode} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../Firebase/connectionApi';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {Alert, FlatList} from 'react-native';
import {collection, addDoc, getDocs, query, where} from 'firebase/firestore';
import {db} from '../Firebase/connectionApi';

interface PropsChildren {
  children: ReactNode;
}

type ChildrenProps = {
  Register: (info: RegisterProps) => Promise<void>;
  Login: (info: RegisterProps) => Promise<void>;
  user: {email: string; uid: string};
  logado: boolean;
  AddDocument: (info: Document) => Promise<void>;
  listAgendas: TypeList[]
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
  corte: string;
  valor: string;
  horario: string;
};

 export interface TypeList   {
  corte: string;
  valor: string;
  horario: string;
};



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

        snapshot.forEach(doc =>
          lista.push({
            corte: doc.data().corte,
            valor: doc.data().valor,
            horario: doc.data().horario,
          }),
        );
        setListAgendas(lista);
        console.log(lista)
      });
    }

    HendleAgendas()
  }, []);

 
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

  async function AddDocument({corte, horario, valor}: Document) {
    try {
      const response = await addDoc(collection(db, 'Agendas'), {
        corte: corte,
        valor: valor,
        horario: horario,
      });
      Alert.alert('ok');
    } catch (err) {
      Alert.alert('deu erro');
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider
      value={{Register, Login, user, logado, AddDocument, listAgendas}}>
      {children}
    </AuthContext.Provider>
  );
}
