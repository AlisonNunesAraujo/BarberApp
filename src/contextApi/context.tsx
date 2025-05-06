import React, { useState } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
import { auth } from "../firebase/conection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
type Tudo = {
    user: DateUser;
    logado: boolean;
    Login: ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => Promise<void>;
};

type DateUser = {
    email: string | null;
    uid: string | null;
};

export const AuthContext = createContext({} as Tudo);

type Children = {
    children: ReactNode;
};

export default function Context({ children }: Children) {
    const [user, setUser] = useState<DateUser>({
        email: "",
        uid: "",
    });
    const logado = !!user?.email && !!user?.uid;

    async function Login({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) {
        const data = await signInWithEmailAndPassword(auth, email, password);
        try {
            setUser({
                email: data.user.email,
                uid: data.user.uid,
            });
            Alert.alert("Logado com sucesso");
        } catch (error) {
            console.log(error);
            Alert.alert("Erro ao logar");
        }
    }

    return (
        <AuthContext.Provider value={{ user, logado, Login }}>
            {children}
        </AuthContext.Provider>
    );
}
