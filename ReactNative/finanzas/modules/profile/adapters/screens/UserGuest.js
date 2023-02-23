import { StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Image, Button } from '@rneui/base'

export default function UserGuest(props) {
    console.log(JSON.stringify(props));
    const {navigation} = props;
    return (
        <View style={styles.container}>
            <ScrollView style={styles.mx} centerContent={true}>
                <Image source={require('../../../../assets/presupuesto.png')} resizeMode="contain" style={styles.img}/>
                <Text style={styles.title}>Bienvenido a Guardadito</Text>
                <Text style={styles.description}>¿Te gustaría ahorrar dinero? Nosotros te ayudamos, crea o inicia sesión de nuestra aplicación y descubre la mejor manera de ahorrar dinero</Text>
                <View style={styles.viewbtnContainer}>
                    <Button title="Iniciar Sesión" icon={{ name: 'login', type: 'material-community', size: 15, color:'white'}} buttonStyle={styles.btn} containerStyle={styles.btnContainer} onPress={() => navigation.navigate('loginStack')}></Button>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        height: "100%"
    },
    mx: {
        marginLeft: 32,
        marginRight: 32
    },
    img: {
        width: '100%',
        height: 150,
        marginTop: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center",
        marginBottom: 16
    },
    description: {
        textAlign: "center",
        marginBottom: 16
    },
    viewbtnContainer: {
        flex: 1,
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'tomato',
        color: '#fff'
    },
    btnContainer: {
        width: "70%"
    },
});