import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Keyboard,
    TextInput,
    SafeAreaView,
    Pressable,
    StyleSheet,
    Alert,
    StatusBar
} from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../../contextApi/context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/conection';
export default function Login() {
    const { user, Login } = useContext(AuthContext)
    const [isFocuslogin, setIsfocuslogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function CreateAccount() {
        Keyboard.dismiss()
        if (email === '' || password === '') {
            Alert.alert('Preencha todos os campos')
            return
        }
        const response = await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                Alert.alert('Ok')

            })
            .catch(() => {
                Alert.alert('erro')
            })
    }

    async function Entrar() {
        Keyboard.dismiss()
        if (email === '' || password === '') {
            Alert.alert('Preencha todos os campos')
            return
        }
        Login({ email, password })


    }


    return (
        <SafeAreaView style={s.Register} >
            <StatusBar barStyle={'light-content'} />
            {isFocuslogin ? (
                <View style={s.form}>
                    <Text style={s.title}>Crie uma conta </Text>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'white'}
                        value={email}
                        onChangeText={setEmail}
                        style={s.inputs}
                    />
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor={'white'}
                        value={password}
                        onChangeText={setPassword}
                        style={s.inputs}
                    />

                    <TouchableOpacity style={s.button} onPress={CreateAccount}>
                        <Text style={s.textButon}>Criar a sua conta!</Text>
                    </TouchableOpacity>
                    <Pressable
                        style={s.buttonCreate}
                        onPress={() => setIsfocuslogin(!isFocuslogin)}>
                        <Text style={s.textCreate}>Entrar na sua conta!</Text>
                    </Pressable>
                </View>
            ) : (
                <View style={s.form}>
                    <Text style={s.title}> Faça seu login!</Text>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'white'}
                        value={email}
                        onChangeText={setEmail}
                        style={s.inputs}
                    />
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor={'white'}
                        value={password}
                        onChangeText={setPassword}
                        style={s.inputs}
                    />
                    <TouchableOpacity style={s.button} onPress={Entrar} >
                        <Text style={s.textButon}>Entrar</Text>
                    </TouchableOpacity>
                    <Pressable
                        style={s.buttonCreate}
                        onPress={() => setIsfocuslogin(!isFocuslogin)}>
                        <Text style={s.textCreate}>Não tem um conta? crie uma!</Text>
                    </Pressable>
                </View>
            )}
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    Register: {
        flex: 1,
        backgroundColor: 'black',
    },
    form: {
        width: '100%',
        height: '50%',
        gap: 20,
        backgroundColor: 'black',
        marginTop: 20,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign: 'center',
    },
    inputs: {
        width: '90%',
        height: 'auto',
        borderRadius: 4,
        marginTop: 20,
        gap: 15,
        justifyContent: 'center',
        padding: 10,
        borderColor: 'white',
        borderWidth: 0.5,
        backgroundColor: 'blue'
    },
    button: {
        width: '90%',
        height: 'auto',
        backgroundColor: 'blue',
        borderRadius: 5,
        marginTop: 20,
        gap: 15,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
    },
    textButon: {
        color: 'white',
        fontFamily: 'Arial',
    },
    buttonCreate: {
        width: '90%',
        height: 'auto',
        borderRadius: 5,
        marginTop: 20,
        gap: 15,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
    },
    textCreate: {
        color: 'white',
        fontFamily: 'Arial',
    },
});
