import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { isEmpty, size } from "lodash";
import { Button, Icon, Image, Input } from "@rneui/base";
import Loading from "../../../../kernel/components/Loading";
import { validateEmail }  from '../../../../kernel/validations'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import axios from '../../../../kernel/http-client.gateaway'

export default function CreateAccount() {
  
    const payload = {
        email: "",
        password: "",
        repeatPassword: "",
    };

    const auth = getAuth();
      
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
                setShow(true);
                setError(payload);
                createUserWithEmailAndPassword(auth, data.email, data.password)
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log("User create", user);
                    (async () => {
                      try {
                        const object = {
                          
                          user: {
                            email: data.email,
                            uid: userCredential.uid,
                            image_profile: "",
                          }
                        }
                        const response = await axios.doPost('/person/', object)
                        console.log("servidor", response)
                      } catch (error) {
                        setShow(false)
                        console.log("error -> " + error)
                      }
                    })()
                    // ...
                  })
                  .catch((error) => {
                    setShow(false);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                  });
              } else {
                setError({
                  email: "",
                  password: "Las contrase??as no coinciden",
                  repeatPassword: "Las contrase??as no coinciden",
                });
              }
            } else {
              setError({
                email: "",
                password: "Se requiere una contrase??a de por lo menos 6 caracteres",
                repeatPassword:
                  "Se requiere una contrase??a de por lo menos 6 caracteres",
              });
            }
          } else {
            setError({
              email: "Debe ser un Correo Electr??nico",
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
            placeholder="Correo Electr??nico"
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
            placeholder="Contrase??a"
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
            placeholder="Contrase??a"
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
