import React from 'react';
import { View, Text, StyleSheet, Pressable, } from 'react-native';
import Inoicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Props } from '../../Routs/freeRouts';
export default function Header() {
    const navigation = useNavigation<NativeStackNavigationProp<Props>>();

    return (
        <View style={s.header}>
            <Text style={s.Title}>Agendas Barbearia</Text>
            <Pressable onPress={() => navigation.navigate('Profile')}>
                <Inoicons name="person" size={30} style={s.Icon} />
            </Pressable>
        </View>
    );
}

const s = StyleSheet.create({
    header: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
    },
    Title: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        fontFamily: 'serif'

    },

    Icon: {
        color: '#000000',
        marginRight: 20,
    },
});