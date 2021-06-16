import React, {useState} from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Registrer =  ({ navigation }) => {

    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <View style={{width: '100%', height: '100%', justifyContent:'center', alignItems: 'center', backgroundColor:'#FFF'}}>
            <View style={styles.containerText}>
                {/* Titre */}
                <Text style={styles.title}>Bienvenue sur BookStore!</Text>
                <Image
                source= {require ('../icons/Background.png')}
                style={{marginTop: 20, width:90, height: 90}}
            />
            </View>
            

            {/* Formulaire */}

            <View style={styles.containerInput}>
                {/* Text  */}
                <Text style={styles.text}>Enregistrez votre livre</Text>

            {/* Auteur ------------------------------------------------------------*/}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder= 'Auteur'
                />
                )}
                name="auteur"
                rules={{ required: true }}
                defaultValue=""
            />
            {errors.auteur && <Text style={styles.errors}>This is required.</Text>}
            
            {/* Categories --------------------------------------------------------*/}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder= 'Catégories'
                />
                )}
                name="categorie"
                rules={{ required: true }}
                defaultValue=""
            />
            {errors.categorie && <Text style={styles.errors}>This is required.</Text>}

            {/* Titre ----------------------------------------------------------------*/}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder= 'Titre'
                />
                )}
                name="titre"
                rules={{ required: true }}
                defaultValue=""
            />
            {errors.titre && <Text style={styles.errors}>This is required.</Text>}


            {/* Bouton --------------------------------------------------*/}
            <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                style={[styles.button]}>
                    <Text style={styles.buttonText}>Envoyer</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

// Css 

const styles = StyleSheet.create ({
    input: {
        width: '80%',
        height: '10%',
        borderWidth: 0.2,
        borderColor: '#357180',
        borderRadius:5,
        marginBottom: 14,
        paddingLeft: 8 
    },
    title: {
        fontSize: 28,
        marginBottom: 10,
        color: '#357180'
    },
    text: {
        fontSize: 20,
        marginBottom: 50,
        color: '#357180'
    },
    button: {
        width: 150,
        height: 40,
        backgroundColor: '#4ABC96',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 30
    },
    buttonText: {
        color: '#F0EBE1',
        fontSize: 18
    },
    containerText: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInput: {
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errors: {
        color: '#D0021B',
        fontSize: 13,
    }
})
export default Registrer;