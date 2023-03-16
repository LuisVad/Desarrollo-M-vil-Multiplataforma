import { StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import { Input, Button, Image, Icon } from "@rneui/base";

export default function ChangePassword() {
  const [display, setDisplay] = useState("")
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View style={styles.container}>
        <Image
          source={require("../../../../../assets/hucha.png")}
          resizeMode="contain"
          style={styles.logotype}
        />
        <Input
          placeholder="Contraseña"
          containerStyle={styles.input}
          onChange={(event) => setPassword(event.nativeEvent.text)}
          secureTextEntry={showPassword}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              color="#007bff"
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <Button
          title="Actualizar"
          icon={
            <Icon
              type="material-community"
              name="login"
              size={22}
              color="#FFF"
            />
          }
          buttonStyle={styles.btnSuccess}
          containerStyle={styles.btnContainer}
          onPress={()=>console.log("HOLA")}
        />
        <Button
          title="Cerrar"
          icon={
            <Icon
              type="material-community"
              name="login"
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
  logotype: {
    width: "100%",
    height: 150,
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
    margin: 16,
  },
  createAccount: {
    color: "#007bff",
  },
})