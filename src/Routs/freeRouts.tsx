import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Pages/Home';
import CretaeAgendas from '../Pages/CreateAgendas';
import ViewAgendas from '../Pages/ViewAgendas';
import Profile from '../Pages/Profile';
export type Props = {
    Home: undefined;
    CretaeAgendas: undefined;
    ViewAgendas: undefined;
    Profile: undefined;
}


const StackRouts = createNativeStackNavigator<Props>();

export default function FreeRouts() {
    return (
        <StackRouts.Navigator>
            <StackRouts.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <StackRouts.Screen
                name="CretaeAgendas"
                component={CretaeAgendas}
                options={{ headerShown: false, animation: 'ios_from_right' }}
            />
            <StackRouts.Screen
                name="ViewAgendas"
                component={ViewAgendas}
                options={{ headerShown: false, animation: 'ios_from_right' }}
            />
            <StackRouts.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false, animation: 'ios_from_right' }}
            />
        </StackRouts.Navigator>
    );
}
