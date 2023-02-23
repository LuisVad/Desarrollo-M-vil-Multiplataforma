import React, {useEffect, useState} from 'react'
import Loading from '../../../../kernel/components/Loading'
import UserGuest from './UserGuest'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UserLogged from './UserLogged'

export default function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async ()=> {
      try {
        const value = await AsyncStorage.getItem('@session')
        if (value !== null) {
          setUser(true)
        } else {
          setUser(false)
        }
      } catch (e) {
        console.log("Error -> Login Storage", e)
      }
    })()
  }, [])
  
  if(user === null) return <Loading/>;
  return user ? <UserLogged/>:<UserGuest/>
}