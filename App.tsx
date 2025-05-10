import React from 'react';
import Prive from './src/Routs/prive';
import { NavigationContainer } from '@react-navigation/native';
import Context from './src/contextApi/context';
import { StatusBar } from 'react-native';
function App() {

  return (
    <NavigationContainer>
      <Context>
        <StatusBar barStyle="light-content" />
        <Prive />
      </Context>
    </NavigationContainer>
  );
}

export default App;
