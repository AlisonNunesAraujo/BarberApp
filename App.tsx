import Context from './src/ContextApi'
import PriveRouts from './src/routs/prive'
import { NavigationContainer } from '@react-navigation/native'
export default function App() {
  return (
    <NavigationContainer>
    <Context>
    <PriveRouts/>
    </Context>
    </NavigationContainer>
  )
}