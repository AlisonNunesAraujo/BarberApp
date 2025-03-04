import { useContext } from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import { AuthContext} from '../../ContextApi';
import { FlatList } from 'react-native';
import Feather from '@react-native-vector-icons/feather'


export default function VerAgendas() {
const {listAgendas} = useContext(AuthContext)

 return (
   <View>
    <Text>Cortes Agendados</Text>

    <FlatList
        data={listAgendas}
        renderItem={({item}) => 
            <View>
                <Text>{item.corte}</Text>
                <Text>{item.horario}</Text>
                <Text>{item.valor}</Text>
                <TouchableOpacity>
                    <Feather name='trash' size={20} />
                </TouchableOpacity>
            </View>
        }
    />
   </View>
  );
}

