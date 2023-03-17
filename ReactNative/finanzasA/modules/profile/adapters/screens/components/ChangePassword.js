import { StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import { Input, Button, Image, Icon, Text } from "@rneui/base";

export default function ChangePassword() {
  const [display, setDisplay] = useState("")
  const [passwordA, setPasswordA] = useState("");
  const [showPasswordA, setShowPasswordA] = useState(true);
  const [passwordB, setPasswordB] = useState("");
  const [showPasswordB, setShowPasswordB] = useState(true);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Cambiar Contraseña</Text>
      </View>
        <Image
          source={require("../../../../../assets/contrasena.png")}
          resizeMode="contain"
          style={styles.logotype}
        />
        <Input
          placeholder="Contraseña Anterior"
          containerStyle={styles.input}
          onChange={(event) => setPasswordA(event.nativeEvent.text)}
          secureTextEntry={showPasswordA}
          rightIcon={
            <Icon
              type="material-community"
              name={showPasswordA ? "eye-off-outline" : "eye-outline"}
              color="#007bff"
              onPress={() => setShowPasswordA(!showPasswordA)}
            />
          }
        />
        <Input
          placeholder="Contraseña Nueva"
          containerStyle={styles.input}
          onChange={(event) => setPasswordB(event.nativeEvent.text)}
          secureTextEntry={showPasswordB}
          rightIcon={
            <Icon
              type="material-community"
              name={showPasswordB ? "eye-off-outline" : "eye-outline"}
              color="#007bff"
              onPress={() => setShowPasswordB(!showPasswordB)}
            />
          }
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
          onPress={()=>console.log("Se cambio la Contraseña!")}
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
    height: 80,
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