import {ReactNode} from 'react'
export interface PropsChildren {
  children: ReactNode;
}

export type ChildrenProps = {
  Register: (info: RegisterProps) => Promise<void>;
  Login: (info: RegisterProps) => Promise<void>;
  user: {email: string; uid: string};
  logado: boolean;
  AddDocument: (info: Document) => Promise<void>;
  listAgendas: TypeList[];
  deletarAgenda: (info: {uid: string}) => Promise<void>;
  LogOut: () => Promise<void>;
 
};


export type RegisterProps = {
  email: string;
  senha: string;
};

export type User = {
  email: string | any;
  uid: string;
};

export type Document = {
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
  uid: string;
}