import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import About from '../../modules/about/adapaters/screens/About';
const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
      <Stack.Navigator screenOptions={{headerMode: 'screen', headerTintColor: 'white', headerStyle: { backgroundColor: '#ff5a60' }}}>
          <Stack.Screen name='aboutStack' options={{ title: 'Acerca de Nosotros' }} component={About}/>
      </Stack.Navigator>
  )
}

export default AboutStack