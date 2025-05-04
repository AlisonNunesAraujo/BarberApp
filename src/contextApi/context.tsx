import React, { useState } from 'react';
import { createContext } from 'react';
import { ReactNode } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/conection';
import { Alert } from 'react-native';
import { collection } from 'firebase/firestore';
import { db } from '../firebase/conection';
import { addDoc, } from 'firebase/firestore';


type Tudo = {
    user: any;
};




export const AuthContext = createContext({} as Tudo);

type Children = {
    children: ReactNode;
};

export default function Context({ children }: Children) {


    const [user, setUser] = useState('alison');



    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}
