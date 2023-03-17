import { StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import { Input, Button, Image, Icon, Text } from "@rneui/base";

export default function ChangeDisplayName() {
  const [display, setDisplay] = useState("")
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Cambiar Nombre</Text>
      </View>
        <Image
          source={require("../../../../../assets/firma.png")}
          resizeMode="contain"
          style={styles.logotype}
        />
        <Input
          placeholder="Nombre Completo"
          containerStyle={styles.input}
        />
        <Button
          title="Actualizar"
          icon={
            <Icon
              type="material-community"
              name="update"
              size={22}
              color="#FFF"
            />
          }
          buttonStyle={styles.btnSuccess}
          containerStyle={styles.btnContainer}
          onPress={()=>console.log("Se cambio el Nombre!")}
        />
        <Button
          title="Cerrar"
          icon={
            <Icon
              type="material-community"
              name="close-box"
              size={22}
              color="#FFF"
            />
          }
          buttonStyle={styles.btnClose}
          containerStyle={styles.btnContainer}
          onPress={()=>console.log("Cerrar")}
        />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#73CAAF",
  },
  text:{
    backgroundColor: "tomato",
    textAlign: "center",
    color: "#FFF",
    size: 500
  },
  logotype: {
    width: "100%",
    height: 50,
    marginTop: 16,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    marginBottom: 16,
  },
  btnSuccess: {
    color: "#FFF",
    backgroundColor: "#28a745",
  },
  btnClose: {
    color: "#FFF",
    backgroundColor: "#E62727",
  },
  btnContainer: {
    margin: 5,
  },
  createAccount: {
    color: "#007bff",
  },
})