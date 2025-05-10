import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { AuthContext } from '../../contextApi/context';
import { useContext } from 'react';
export default function Profile() {
    const { user } = useContext(AuthContext);
    return (
        <View>
            <View>
                <Text>Nome</Text>
                <TextInput placeholder='Nome' />
            </View>
            <View>
                <Text>Seu E-Mail</Text>
                <Text>{user.email}</Text>
            </View>
        </View>
    );
}