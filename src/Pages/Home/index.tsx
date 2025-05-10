import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Props } from '../../Routs/freeRouts';
import Header from '../../components/header';


export default function Home() {
    const navigation = useNavigation<NativeStackNavigationProp<Props>>();


    return (
        <View style={s.conteiner}>
            <Header />


            <View style={s.menu}>
                <View style={s.btns}>
                    <TouchableOpacity
                        style={s.buttonsAdd}
                        onPress={() => navigation.navigate('CretaeAgendas')}>
                        <Text style={s.textButtons}>Adcionar um novo agendamento</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={s.buttons} onPress={() => navigation.navigate('ViewAgendas')}>
                        <Text style={s.textButtons}>Ver a sua agenda</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    );
}

const s = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: 'black',
    },
    menu: {
        width: '100%',
        height: 150,
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btns: {
        width: '90%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

    },
    buttonsAdd: {
        width: '50%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        borderRadius: 7,

    },
    buttons: {
        width: '50%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 7,
    },
    textButtons: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        padding: 10,
    },
});
