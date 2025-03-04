import {View, Text, SafeAreaView, StyleSheet,TouchableOpacity} from 'react-native';
import Header from '../../Components/Header';
import AddAgenda from '../../Components/AddAgenda';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';



export default function Home() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={s.conteiner}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View>
        <Header />
        <AddAgenda />
      </View>

     
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: 'black',
  },
});
