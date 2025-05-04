import React from 'react';
import Prive from './src/Routs/prive';
import { NavigationContainer } from '@react-navigation/native';
import Context from './src/contextApi/context';

function App() {

  return (
    <NavigationContainer>
      <Context>
        <Prive />
      </Context>
    </NavigationContainer>
  );
}

export default App;
