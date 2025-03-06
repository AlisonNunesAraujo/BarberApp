import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/home';
import Agendas from '../pages/agendas';
import VerAgendas from '../pages/VerAgendas';


export type Routs = {
  Home: undefined;
  Agendas: undefined;
  VerAgendas: undefined
};

const Stack = createNativeStackNavigator<Routs>();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Agendas"
        component={Agendas}
        options={{title: 'Adicione suas agendas', headerShown: false}}
      />
      <Stack.Screen name='VerAgendas' component={VerAgendas} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
