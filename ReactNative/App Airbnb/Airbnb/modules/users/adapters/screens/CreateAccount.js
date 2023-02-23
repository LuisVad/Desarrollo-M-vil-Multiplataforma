import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { isEmpty, size } from "lodash";
import { Button, Icon, Image, Input } from "@rneui/base";
import Loading from "../../../../kernel/components/Loading";
import { validateEmail }  from '../../../../kernel/validations'

export default function CreateAccount() {
    const payload = {
        email: "",
        password: "",
        repeatPassword: "",
      };
      
      const [show, setShow] = useState(false);
      const [error, setError] = useState(payload);
      const [data, setData] = useState();
      const [showPassword, setShowPassword] = useState(true);
      const [showRepeatPassword, setShowRepeatPassword] = useState(true);
      const changePayload = (e, type) => {
        setData({ ...data, [type]: e.nativeEvent.text });
      };
      
      const createUser = () => {
        if (!(isEmpty(data.email) || isEmpty(data.password))) {
          if (validateEmail(data.email)) {
            if (size(data.password) >= 6) {
              if (data.password === data.repeatPassword) {
                setError({ email: "", password: "", repeatPassword: "" });
                console.log("listo para el registro");
              } else {
                setError({
                  email: "",
                  password: "Las contraseñas no coinciden",
                  repeatPassword: "Las contraseñas no coinciden",
                });
              }
            } else {
              setError({
                email: "",
                password: "Se requiere una contraseña de por lo menos 6 caracteres",
                repeatPassword:
                  "Se requiere una contraseña de por lo menos 6 caracteres",
              });
            }
          } else {
            setError({
              email: "Debe ser un Correo Electrónico",
              password: "",
              repeatPassword: "",
            });
          }
        } else {
          setError({
            email: "Campo Obligatorio",
            password: "Campo Obligatorio",
            repeatPassword: "Campo Obligatorio",
          });
        }
      };
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/label.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewForm}>
        <View style={styles.container}>
          <Input
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            rightIcon={
              <Icon type="material-community" name="email" size={22} />
            }
            containerStyle={styles.input}
            onChange={(e) => changePayload(e, "email")}
            errorMessage={error.email}
            autoCapitalize="none"
          />
          <Input
            placeholder="Contraseña"
            rightIcon={
              <Icon
                type="material-community"
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            containerStyle={styles.input}
            secureTextEntry={showPassword}
            onChange={(e) => changePayload(e, "password")}
            errorMessage={error.password}
          />
          <Input
            placeholder="Contraseña"
            rightIcon={
              <Icon
                type="material-community"
                name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                onPress={() => setShowRepeatPassword(!showRepeatPassword)}
              />
            }
            containerStyle={styles.input}
            secureTextEntry={showRepeatPassword}
            onChange={(e) => changePayload(e, "repeatPassword")}
            errorMessage={error.repeatPassword}
          />
          <Button
            title="Crear Cuenta"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            onPress={createUser}
          />
        </View>
      </View>
      <Loading show={show} text="Registrar Usuario"></Loading>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "60%",
    height: 150,
    marginTop: 10,
    marginHorizontal: 80
  },
  viewForm: {
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    width: "100%",
    marginVertical: 10,
  },
  btnContainer: {
    marginBottom: 20,
    width: "95%",
  },
  btn: {
    color: "#28a745",
  },
});
