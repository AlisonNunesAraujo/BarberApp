import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Feather from '@react-native-vector-icons/feather';
import {useContext} from 'react';
import {AuthContext} from '../../ContextApi';

export default function AgendasAdd() {
  const [isShow, setShow] = useState(false);
  const navigaton = useNavigation();
  const {AddDocument} = useContext(AuthContext);

  const [cliente, setCliente] = useState('');
  const [serviço, setServiço] = useState('');
  const [valor, setValor] = useState('');
  const [horario, setHorario] = useState('');

  async function Add() {
    if (serviço == '' || valor == '' || horario == '' || cliente == '') {
      Alert.alert('Preencha os campos ');
      return;
    }
    AddDocument({serviço, valor, horario, cliente});
    setCliente('')
    setHorario('')
    setServiço('')
    setValor('')
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.conteiner}>
        <View style={s.header}>
          <View style={s.areaHeader}>
            <TouchableOpacity
              style={s.bntVoltar}
              onPress={() => navigaton.goBack()}>
              <Feather name="arrow-left" size={25} color={'white'} />
            </TouchableOpacity>
            <Text style={s.TitleHader}>
              Aqui voçe pode adicionar suas agendas!
            </Text>
          </View>
          {isShow ? (
            <Text></Text>
          ) : (
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={s.buttomAddAgenda}>
              <Text style={s.Textbuttom}>Adicionar agenda</Text>
            </TouchableOpacity>
          )}
        </View>

        {isShow ? (
          <View>
            <Text style={s.TitleareaAdd}>Preencha os dodos!</Text>
            <TextInput
              placeholder="Cliente"
              value={cliente}
              onChangeText={setCliente}
              placeholderTextColor={'black'}
              style={s.inputs}
            />
            <TextInput
              placeholder="Serviço"
              value={serviço}
              onChangeText={setServiço}
              placeholderTextColor={'black'}
              style={s.inputs}
              
            />
            <TextInput
              placeholder="Valor"
              value={valor}
              onChangeText={setValor}
              placeholderTextColor={'black'}
              keyboardType="numeric"
              style={s.inputs}
            />
            <TextInput
              placeholder="Horario"
              value={horario}
              onChangeText={setHorario}
              placeholderTextColor={'black'}
              style={s.inputs}
            />
            <TouchableOpacity style={s.bntAgendar} onPress={Add}>
              <Text style={s.Textbuttom}>Agendar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShow(false)}
              style={s.bntAgendar}>
              <Text style={s.Textbuttom}>Ocultar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text></Text>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: 'black',
    padding: 20,
    gap: 20,
    alignItems: 'center',
  },
  TitleHader: {
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'white',
  },
  buttomAddAgenda: {
    width: '50%',
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  Textbuttom: {
    fontFamily: 'Arial',
    color: 'white',
    fontWeight: 'bold',
  },

  inputs: {
    width: '90%',
    padding: 10,
    marginLeft: '5%',
    marginTop: 20,
    borderRadius: 2,
    boxShadow: '0px 1px 1px 0px',
    backgroundColor: '#ccc',
  },
  bntAgendar: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 3,
  },
  bntVoltar: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaHeader: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  TitleareaAdd: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});
