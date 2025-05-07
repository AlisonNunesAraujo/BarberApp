import React, { useState } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
import { auth } from "../firebase/conection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/conection";
import { useNavigation } from "@react-navigation/native";
type Tudo = {
    user: DateUser;
    logado: boolean;
    AddAgenda: ({
        name,
        service,
        date,
        hour,
    }: {
        name: string;
        service: string;
        date: string;
        hour: string;
    }) => Promise<void>;
    Login: ({
        email, password }: { email: string; password: string; }) => Promise<void>;
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
    const navigator = useNavigation();
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

    async function AddAgenda({
        name,
        service,
        date,
        hour,
    }: {
        name: string;
        service: string;
        date: string;
        hour: string;
    }) {
        const data = await addDoc(collection(db, "agendas"), {
            name,
            service,
            date,
            hour,
        });
        navigator.goBack();
    }

    return (
        <AuthContext.Provider value={{ user, logado, Login, AddAgenda }}>
            {children}
        </AuthContext.Provider>
    );
}
