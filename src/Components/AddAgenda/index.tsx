import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Routs} from '../../routs/auth';
export default function AddAgenda() {
  const nav = useNavigation<NativeStackNavigationProp<Routs>>();

  function Navegar(){
    nav.navigate('Agendas')
  }


  return (
    <View style={s.areaAddAgenda}>
      <Text style={s.TitleareaAgenda}>Bem vindo!</Text>

      <TouchableOpacity
        style={s.bntAgendar}
        onPress={Navegar}>
        <Text style={s.textbntAgendar}>Agendar um corte!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.bntAgendar}>
        <Text style={s.textbntAgendar}>Verificar agenda</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  areaAddAgenda: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    marginTop: 30,
    marginLeft: '5%',
    borderRadius: 3,
  },
  TitleareaAgenda: {
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  bntAgendar: {
    width: '50%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 3,
  },
  textbntAgendar: {
    fontFamily: 'Arial',
    color: 'white',
    fontWeight: 'bold',
  },
});
