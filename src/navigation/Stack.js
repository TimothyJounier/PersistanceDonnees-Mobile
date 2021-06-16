import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, Button, View } from 'react-native';
// 
import Modification from '../screens/Modification';

const Stack = createStackNavigator();

const MyStack = () => {
        return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Modification"
                    component={Modification}
                    options={{ title: 'Modification' }}
                />            
            </Stack.Navigator>
        </NavigationContainer>
        );
    };
    
    
    
    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    });
    
    export default MyStack;