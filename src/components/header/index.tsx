import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Header() {
    return (
        <View style={s.header}>
            <Text style={s.Title}>Agensdas Barbearia</Text>
            <Text style={s.Icon}>Configurar</Text>
        </View>
    );
}

const s = StyleSheet.create({
    header: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        backgroundColor: '#000000',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20
    },
    Title: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        fontFamily: 'serif'

    },

    Icon: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 20,
        fontFamily: 'serif'
    }
});