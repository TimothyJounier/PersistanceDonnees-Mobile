import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Import de la list de la librairie paper
import { List } from 'react-native-paper';

// fonction de la List
const ListItem = ({ navigation }) => (
    <View style={styles.ctnList}>
        <View style={styles.ctnLeft}>
                <TouchableOpacity 
                    style={styles.btnList}
                    onPress={() => navigation.navigate("Modification")}
                >
                    
            <List.Item
                title="First Item"
                description="Item description"
                right={props => <List.Icon {...props} 
                style={styles.list}
                />}
            />
            </TouchableOpacity>
        </View>
        <View style={styles.ctnRight}>
            <Image
                source={require('../icons/Arrow.png')}
                style={{width:'50%', height:'70%'}}
            />
        </View>
        
    </View>
        
);

// Css
const styles = StyleSheet.create ({
    ctnList: {
        width: '90%',
        height: '10%',
        borderWidth: 0.2,
        borderColor: '#357180',
        borderRadius:5,
        flexDirection: 'row',
        alignItems:'center',
    },
    ctnLeft: {
        width: '80%'
    },
    ctnRight: {
        width: '20%'
    },
    imgList:{
        backgroundColor: 'red',
        width: '100%',
        flex: 0.2
    }
})

export default ListItem;