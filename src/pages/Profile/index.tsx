import {View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {AuthContext} from '../../ContextApi';
import Feather from '@react-native-vector-icons/feather';
import {useNavigation} from '@react-navigation/native';

export default function Profile() {
  const {user,LogOut} = useContext(AuthContext);
  const navigation = useNavigation();

  async function singOut(){
    LogOut()
  }


  return (
    <View style={s.conteiner}>
      <View style={s.cabeçalho}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" color={'white'} size={29} />
        </TouchableOpacity>
        <Text style={s.Title}>Perfil</Text>
      </View>
      <View style={s.areaInfo}>
        <Text style={s.textEmail}>Email: {user.email}</Text>

        <View>
          <Text style={s.textDesc}>
            Desc: O aplicativo BarberPro foi criado para auxiliar barbeiros a
            gerenciar suas agendas e clientes, podendo adicionar seus horarios,
            clientes e serviços! O aplicativo bem simples de usar, com uma
            interface intuitiva e fácil de entender.
          </Text>
        </View>
      </View>

      <View style={s.areabntSair}>
        <TouchableOpacity style={s.buttomSair} onPress={singOut}>
          <Text style={s.textButtomSair}>Sair da conta!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: 'black',
  },
  cabeçalho: {
    flexDirection: 'row',
    padding: 10,
    gap: 20,
    alignItems: 'center',
  },
  Title: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Arial',
  },
  areaInfo: {
    width: '100%',
    height: '50%',
    padding: 30,
  },
  textEmail: {
    fontSize: 17,
    color: 'white',
  },
  textDesc: {
    fontSize: 15,
    color: 'white',
    marginTop: '20%',
  },
  buttomSair: {
    width: '50%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: 'red',
  },
  textButtomSair: {
    fontFamily: 'Arial',
    color: 'white',
    fontWeight: 'bold',
  },
  areabntSair: {
    width: '100%',
    height: 100,
    bottom: '5%',
    left: 0,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
});
