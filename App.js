import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import { SafeAreaView } from 'react-native';
import MyStack from './src/navigation/Stack';

const App = ({navigation}) => {
  return (
  <SafeAreaView style={{width:'100%', height: '100%'}}>
    <NavigationContainer>
      <Tabs navigation={navigation}/>
    </NavigationContainer>
  </SafeAreaView>
  );
};

export default App;  