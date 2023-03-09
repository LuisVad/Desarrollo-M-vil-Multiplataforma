import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from '@rneui/base'
import ProfileStack from '../stack/ProfileStack'
import AboutStack from '../stack/AboutStack'
const Tab = createBottomTabNavigator()

export default function navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={({route}) => ({ headerShown: false, tabBarIcon: ({color}) => screenOptions(route, color), tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' })} >
            <Tab.Screen name='profile' options={{title: 'Perfil'}} component={ProfileStack} />
            <Tab.Screen name='about' options={{title: 'Conócenos'}} component={AboutStack} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case 'profile':
            iconName = 'account-outline';
            break;
        case 'about':
            iconName = 'information-outline';
            break;
    }
    return (
        <Icon type='material-community' name={iconName} size={22} color={color} />
    )
}