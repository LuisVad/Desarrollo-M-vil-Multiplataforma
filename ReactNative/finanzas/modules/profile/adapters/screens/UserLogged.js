import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button } from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../../../kernel/components/Loading';
import { Avatar } from 'react-native-elements';

export default function UserLogged(props) {
  const {setReload, user} = props;
  console.log("mi sesión", user);
  const [show, setShow] = useState(false)
  const removeValue = async () => {
    try {
      setShow(true)
      await AsyncStorage.removeItem('@session');
      setShow(false)
      setReload(true)
    } catch(e) {
      
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Avatar size="large" rounded source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/airbnb-390e6.appspot.com/o/avatar%2F2XpKQNZ0KCZOO5atTUxpLYrIz6D3.jpg?alt=media&token=b06a83cb-c038-4e5b-8196-524289af7bec' }} containerStyle={styles.avatar}>
          <Avatar.Accessory size={22} onPress={()=> console.log("LAPIZ")}></Avatar.Accessory>
        </Avatar>
      </View>
      <View>
        <Text style={styles.displayName}>{user.providerData[0].displayName ? user.providerData[0].displayName : 'Anónimo'}</Text>
        <Text>{user.providerData[0].email}</Text>
      </View>
      <Button title="Cerrar Sesión" buttonStyle={styles.btn} onPress={removeValue}/>
      <Loading show={show} text="Cerrando Sesión"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "#FFF"
  },
  btn: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: "tomato",
    paddingVertical: 10
  },
  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 30
  },
  avatar: {
    marginRight: 16
  },
  displayName: {
    fontWeight: 'bold',
    paddingBottom: 5
  }
})