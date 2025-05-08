import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { auth } from "../firebase/conection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/conection";
import { useNavigation } from "@react-navigation/native";

import { Agenda, DateUser, Tudo, Children } from "../contextApi/types";

export const AuthContext = createContext({} as Tudo);

export default function Context({ children }: Children) {
    const navigator = useNavigation();
    const [agendas, setAgendas] = useState<Agenda[]>([]);
    const [user, setUser] = useState<DateUser>({
        email: "",
        uid: "",
    });
    const logado = !!user?.email && !!user?.uid;

    useEffect(() => {
        async function GetAgendas() {
            const data = collection(db, "agendas");
            getDocs(data).then((querySnapshot) => {
                let lista: Agenda[] = [];
                querySnapshot.forEach((doc) => {
                    lista.push({
                        name: doc.data().name,
                        service: doc.data().service,
                        date: doc.data().date,
                        hour: doc.data().hour,
                        uid: doc.data().uid,
                    });
                    setAgendas(lista);
                });
            });
        }
        GetAgendas();
    });

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
        try {
            const data = await addDoc(collection(db, "agendas"), {
                uid: user.uid,
                name,
                service,
                date,
                hour,
            });
            navigator.goBack();
        } catch (error) {
            Alert.alert("Erro ao criar agenda");
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ user, logado, Login, AddAgenda, agendas }}>
            {children}
        </AuthContext.Provider>
    );
}
