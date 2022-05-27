import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
//import { Navigator } from './src/navigator/Navigator';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <Navigator /> */}
    </NavigationContainer>
  )
}

export default App;