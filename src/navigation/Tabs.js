import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

// import components
import Registrer from '../screens/Registrer';
import Details from '../screens/Details';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent:'center',
            alignItems:'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height:70,
            borderRadius: 35,
            backgroundColor: 'red'
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
            showLabel: false,
            style: {
                position:"absolute",
                bottom: 15,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#4ABC96',
                borderRadius: 10,
                height: 70,
                ...styles.shadow
            }
        }}
    >
            <Tab.Screen
                name="Accueil"
                component={Registrer}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{alignItems:'center',justifyContent: 'center'}}>
                            <Image
                                source={require('../icons/Accueil.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#357180' : '#F0EBE1',
                                }}
                            />
                            <Text
                                style={{color : focused ? '#357180' : '#F0EBE1', fontSize:12, marginTop:5}}>ACCUEIL
                            </Text>
                        </View>
                    ),
                    
                }}/>

            <Tab.Screen
                name="Savoir Faire"
                component={Details}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{alignItems:'center',justifyContent: 'center'}}>
                            <Image
                                source={require('../icons/Liste.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#357180' : '#F0EBE1',
                                }}
                            />
                            <Text
                                style={{color : focused ? '#357180' : '#F0EBE1', fontSize:12, marginTop:5}}>LISTE 
                            </Text>
                        </View>
                    ),
                }}/>
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create ({
    shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;