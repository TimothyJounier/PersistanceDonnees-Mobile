import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {getRealm} from './src/database/getRealmApp';

const App = () => {
    const getRealmApp = async () => {
        const realm = await getRealm();
        const book = realm.objects('Book')
        realm.close()
        return book
    };
    useEffect(() => {
        console.log('promesse',getRealmApp());
        getRealmApp().then(data => {
        console.log('book', data);
        })
    }, []);

    return (
    <Text>Test</Text>
    )
    };