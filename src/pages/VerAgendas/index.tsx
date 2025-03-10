import {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {AuthContext} from '../../ContextApi';
import {FlatList} from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import {useNavigation} from '@react-navigation/native';


export default function VerAgendas() {
  const {listAgendas,deletarAgenda} = useContext(AuthContext);
  const navigation = useNavigation();


  async function DeleteDocument(uid: string) {
    deletarAgenda({uid})
    Alert.alert('ok')
  }

  return (
    <View style={s.conteiner}>
      <View style={s.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={25} color={'white'} />
        </TouchableOpacity>
        <Text style={s.TextHeader}>Suas agendas</Text>
      </View>
      <Text style={s.Title}>Cortes Agendados</Text>

      <View style={s.areaRender}>
        <FlatList
        style={{height: '80%'}}
          data={listAgendas}
          renderItem={({item}) => (
            <View style={s.flat}>
              <Text style={s.TextFlat}>Cliente: {item.cliente}</Text>
              <Text style={s.TextFlat}>Serviço: {item.serviço}</Text>
              <Text style={s.TextFlat}>Horario: {item.horario}</Text>
              <Text style={s.TextFlat}>Valor: {item.valor}</Text>
              <TouchableOpacity onPress={() => DeleteDocument(item.uid)}>
                <Feather name="trash" size={20} color={'white'}/>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: 'black',
  },
  areaRender: {
    padding: 20,
    marginTop: 10,
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  TextHeader: {
    color: 'white',
    fontFamily: 'Arial',
    marginLeft: 20,
    fontSize: 16,
  },
  Title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  flat: {
    gap: 5,
    margin: 5,
    marginBottom: 20,
    backgroundColor: '#1C1C1C',
    padding: 10,
    borderRadius: 5,

  },
  TextFlat: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 17,
  },
  iconEcluir:{
    backgroundColor: 'white'
  }
});
