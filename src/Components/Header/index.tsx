import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {AuthContext} from '../../ContextApi';
import Feather from '@react-native-vector-icons/feather';

export default function Header() {
  const {user} = useContext(AuthContext);
  return (
    <View style={s.Header}>
      <View style={s.Headertitle}>
        <Text style={s.TitleHeader}>BarberPro</Text>
      </View>

      <View style={s.Menu}>
        <TouchableOpacity style={s.buttons}>
          {/* <Text style={s.TextButtons}>Agendar</Text> */}
          <Feather name="settings" size={20} color={'white'} />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextButtons: {
    color: 'white',
  },
});
