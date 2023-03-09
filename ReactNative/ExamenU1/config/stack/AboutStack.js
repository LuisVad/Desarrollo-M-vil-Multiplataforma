import {createNativeStackNavigator} from '@react-navigation/native-stack'
import About from '../../modules/about/About';
const Stack = createNativeStackNavigator();
import React from 'react'

const AboutStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerMode: 'screen', headerTintColor: 'white', headerStyle: { backgroundColor: '#ff5a60' }}}>
            <Stack.Screen name='aboutStack' options={{ title: 'Acerca de Nosotros' }} component={About}/>
        </Stack.Navigator>
    )
  }

export default AboutStack