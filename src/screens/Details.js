import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ListItem from '../components/List';

const Details =  ({navigation}) => {
    return (
        <View style={{width: '100%', height: '100%', justifyContent:'center', alignItems: 'center', backgroundColor:'#FFF'}}>
            <View style={styles.containerText}>
                <Text style={styles.text}>Vos livres</Text>
            </View>
                <View style={styles.containerList}>
                    <ListItem />
            </View>
    </View>
    )
}

const styles = StyleSheet.create ({
    containerText: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerList: {
        width: '100%',
        height: '80%',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        color: '#357180'
    },
    btnList: {
        backgroundColor: 'red'
    }
})

export default Details;