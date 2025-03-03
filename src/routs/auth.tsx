import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    )
}