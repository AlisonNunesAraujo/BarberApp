import {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AuthContext} from '../../ContextApi';
import {FlatList} from 'react-native';
import Feather from '@react-native-vector-icons/feather';

export default function VerAgendas() {
  const {listAgendas} = useContext(AuthContext);

  return (
    <View style={s.conteiner}>
      <Text>Cortes Agendados</Text>

      <View style={s.areaRender}>
        <FlatList
          data={listAgendas}
          renderItem={({item}) => (
            <View style={s.flat}>
             <Text style={s.TextFlat}>Cliente: {item.cliente}</Text>
              <Text style={s.TextFlat}>Corte: {item.corte}</Text>
              <Text style={s.TextFlat}>Horario: {item.horario}</Text>
              <Text style={s.TextFlat}>Valor: {item.valor}</Text>
              <TouchableOpacity>
                <Feather name="trash" size={20} />
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
  flat:{
    gap: 10,
    margin: 5,
    marginBottom: 20,
    backgroundColor:  'blue',
    padding: 5,
    borderRadius: 5

  },
  TextFlat:{
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 17
  }
});
