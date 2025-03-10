import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {AuthContext} from '../../ContextApi';
import Feather from '@react-native-vector-icons/feather';
import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routs} from '../../routs/auth';

export default function Header() {
  const {user} = useContext(AuthContext);
  const naviagation = useNavigation<NativeStackNavigationProp<Routs>>();

  return (
    <View style={s.Header}>
      <View style={s.Headertitle}>
        <Text style={s.TitleHeader}>BarberPro</Text>
      </View>

      <View style={s.Menu}>
        <TouchableOpacity
          style={s.buttons}
          onPress={() => naviagation.navigate('Perfil')}>
          <Feather name="user" size={20} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  Header: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  Headertitle: {
    width: '30%',
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleHeader: {
    fontFamily: 'Arial',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  Menu: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttons: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextButtons: {
    color: 'white',
  },
});
