import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

export default function ViewAgendas() {
    return (
        <SafeAreaView style={s.ViewAgendas}>
            <View style={s.render}>
                <Text style={s.title}>Suas agendas confirmadas!</Text>
                <View style={s.areaRender}>
                    <Text style={s.textRender}>Nome: Alison</Text>
                    <Text style={s.textRender}>Servico: Corte</Text>
                    <Text style={s.textRender}>Data: 01/01/2023</Text>
                    <Text style={s.textRender}>Horario: 10:00</Text>
                    <Pressable style={s.bnt}>
                        <Text style={s.textButon}>Excluir</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    ViewAgendas: {
        flex: 1,
        backgroundColor: 'black',
    },
    render: {
        width: '100%',
        height: '70%',
        gap: 20,
        marginTop: 20
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign: 'center'
    },
    areaRender: {
        width: '90%',
        height: 'auto',
        backgroundColor: 'blue',
        borderRadius: 5,
        marginTop: 20,
        marginLeft: '5%',
        gap: 15,
        justifyContent: 'center',
        padding: 10,
    },
    textRender: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: '5%',
    },
    bnt: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: 5,
        marginLeft: '5%',
        padding: 10
    },
    textButon: {
        fontFamily: 'sans-serif',
        fontSize: 15,
        color: 'white'
    }
})

