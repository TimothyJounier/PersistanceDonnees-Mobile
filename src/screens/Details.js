import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Details =  ({navigation}) => {
    return (
        <View style={{width: '100%', height: '100%', justifyContent:'center', alignItems: 'center', backgroundColor:'#FFF'}}>
            <View style={styles.containerText}>
                <Text style={styles.text}>Vos livres</Text>
            </View>
            <View style={styles.containerList}>
                <FlatList>

                </FlatList>
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
    },
    text: {
        fontSize: 25
    }
})

export default Details;