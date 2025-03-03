import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../../Components/Header';
import AddAgenda from '../../Components/AddAgenda';
import { useNavigation } from '@react-navigation/native';
export default function Home() {
    const nav = useNavigation()
  return (
    <SafeAreaView style={s.conteiner}>
      <View>
        <Header />
        <AddAgenda/>

       
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: 'black',
    },
  
    
})
