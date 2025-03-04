import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import {auth} from '../../Firebase/connectionApi';
import {signInWithEmailAndPassword} from 'firebase/auth';

import { useContext } from 'react';
import { AuthContext } from '../../ContextApi';


export default function Logar() {
  const [isShow, setisShow] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const {Register,Login} = useContext(AuthContext)

  async function createAccount() {
    Register({email,senha});
    setEmail('')
    setSenha('')

  }

  async function AcessLogin() {
    Login({email,senha});
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={s.conteiner}>
        {isShow ? (
          <View style={s.formulaio}>
            <Text style={s.TitleLogin}>Crie sua conta!</Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={s.inputs}
            />
            <TextInput
              placeholder="****"
              value={senha}
              onChangeText={setSenha}
              style={s.inputs}
            />
            <TouchableOpacity style={s.buttom} onPress={createAccount}>
              <Text style={s.textbntEntrar}>Criar conta!</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.bntCriarconta}
              onPress={() => setisShow(!isShow)}>
              <Text style={s.textcriarConta}>
                Ja tem uma conta?
                <Text style={s.textcriarConta2}> Entrar</Text>
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={s.formulaio}>
            <Text style={s.TitleLogin}>Entre na sua conta!</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={s.inputs} />
            <TextInput placeholder="****" value={senha}  onChangeText={setSenha} style={s.inputs} />
            <TouchableOpacity style={s.buttom} onPress={AcessLogin}>
              <Text style={s.textbntEntrar}>Entrar na conta!</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.bntCriarconta}
              onPress={() => setisShow(!isShow)}>
              <Text style={s.textcriarConta}>
                Não tem uma conta?
                <Text style={s.textcriarConta2}> Criar Conta</Text>
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  formulaio: {
    width: '100%',
    height: 'auto',
    padding: 20,
    backgroundColor: '#ccc',
    overflow: 'hidden',
  },
  TitleLogin: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  inputs: {
    width: '100%',
    borderColor: 'black',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 15,
    borderRadius: 3,
    marginTop: 15,
    color: 'black',
  },
  buttom: {
    width: '100%',
    height: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  textbntEntrar: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  bntCriarconta: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textcriarConta: {
    color: 'white',
  },
  textcriarConta2: {
    color: 'red',
    fontFamily: 'Arial',
  },
});
