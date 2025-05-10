import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { auth } from "../firebase/conection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/conection";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteDoc, doc } from "firebase/firestore";

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

        async function GetUser() {
            const user = await AsyncStorage.getItem("user");
            if (user) {
                setUser(JSON.parse(user));
            }
        }
        GetUser();

        async function GetAgendas() {
            const data = collection(db, "agendas");
            getDocs(data).then((querySnapshot) => {
                let lista: Agenda[] = [];
                querySnapshot.forEach((doc) => {
                    lista.push({
                        name: doc.data().name,
                        service: doc.data().service,
                        date: doc.data().date,
                        valor: doc.data().valor,
                        uid: doc.id,
                    });

                });
                setAgendas(lista);
            });
        }
        GetAgendas();
    }, [DeleteAgenda, AddAgenda, navigator]);

    async function DeleteAgenda(uid: string) {
        const data = doc(db, "agendas", uid);
        await deleteDoc(data)
            .then(() => {
                Alert.alert("Agenda excluida com sucesso");
            })
            .catch((error) => {
                Alert.alert("Erro ao excluir agenda");
            });
    }

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

            const dados = {
                email: data.user.email,
                uid: data.user.uid,
            }

            await AsyncStorage.setItem("user", JSON.stringify(dados));
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
        valor,
    }: {
        name: string;
        service: string;
        date: string;
        valor: string;
    }) {
        try {
            const data = await addDoc(collection(db, "agendas"), {
                uid: user.uid,
                name,
                service,
                date,
                valor,
            });
        } catch (error) {
            Alert.alert("Erro ao criar agenda");
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider
            value={{ user, logado, Login, AddAgenda, agendas, DeleteAgenda }}
        >
            {children}
        </AuthContext.Provider>
    );
}
