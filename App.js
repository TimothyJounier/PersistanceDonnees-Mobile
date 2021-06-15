import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
  <SafeAreaView style={{width:'100%', height: '100%'}}>
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  </SafeAreaView>
  );
};

export default App;  