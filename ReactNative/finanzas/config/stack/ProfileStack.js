import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Profile from '../../modules/profile/adapters/screens/Profile'
import UserGuest from '../../modules/profile/adapters/screens/UserGuest';
import Login from '../../modules/auth/adapters/components/Login';
import CreateUser from '../../modules/user/CreateUser';
const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="userGuestStack" screenOptions={{headerMode: 'screen', headerTintColor: 'white', headerStyle: {backgroundColor: '#ff5a60'}}}>
        <Stack.Screen name='profileStack' options={{title: 'Perfil'}} component={Profile}/>
        <Stack.Screen name='userGuestStack' options={{ title: 'Bienvenido' }} component={UserGuest}/>
        <Stack.Screen name='loginStack' options={{ title: 'Login' }} component={Login} />
        <Stack.Screen name='createUserStack' options={{ title: 'Crear Nuevo Usuario' }} component={CreateUser} />
    </Stack.Navigator>
  )
}