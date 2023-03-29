import { Dimensions, StyleSheet, View, Text, Alert, Platform } from 'react-native'
import React, {useState, useEffect, useRef} from 'react'
import { Button, Image, Icon, Divider } from "@rneui/base";
import * as Location from 'expo-location'
import * as Permission from 'expo-permissions'
import MapWiew, { Marker } from 'react-native-maps'
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications'


const widthScreen = Dimensions.get('window').width;

//configuración global - diseño
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

//función que envía la notificación
async function sendPushNotification(expoPushToken){

}

//permisos para acceder a las notificaciones y obtener el token
async function registerForPushNotificationsAsync(){

}

export default function ChangeAddress(props) {
  const { setShowModal } = props;
  const [location, setLocation] = useState(null);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "denied") {
                try {
                    const loc = await Location.getCurrentPositionAsync({});
                    setLocation({
                        latitude: loc.coords.latitude,
                        longitude: loc.coords.longitude,
                        latitudDelta: 0.004757,
                        longitudDelta: 0.006866,
                      })
                      console.log('location', location)
                } catch (error) {
                    console.log("error", error);
                }
            } else {
                //alert
            }
        })();
    }, []);

    useEffect(() => {
      registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });
  
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });
  
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }, []);

  const save = async () => {
    await sendPushNotification(expoPushToken)
  } 

  return (
    <View>
    {location && (
      <MapWiew style={styles.map} initialRegion={location} showsUserLocation={true} minZoomLevel={15} onRegionChange={(region)=> setLocation(region)}>
        <Marker coordinate={{latitude: location.latitude, longitude: location.longitude}} title="Mi ubicación" draggable/>
      </MapWiew>
    )}
    <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
      <Divider color="tomato" width={2} style={styles.divider} />
    </View>
    <View style={styles.containerButtons}>
    <Button
        title="Cancelar Ubicación"
        icon={
          <Icon
            type="material-community"
            name="close-box"
            size={22}
            color="#FFF"
          />
        }
        containerStyle={styles.btnDangerContainer}
        buttonStyle={styles.btnDanger}
        onPress={()=>setShowModal(false)}
      />
      <Button
        title="Guardar"
        icon={
          <Icon
            type="material-community"
            name="update"
            size={22}
            color="#FFF"
          />
        }
        containerStyle={styles.btnSuccessContainer}
        buttonStyle={styles.btnSuccess}
        onPress={save}
      />
    </View>
  </View>
  )
}



const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 560,
  },
  divider: {
      width: "100%",
  },
  container: {
    backgroundColor: "#73CAAF",
  },
  text:{
    backgroundColor: "tomato",
    textAlign: "center",
    color: "#FFF",
    size: 500
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  input: {
    width: "100%",
    marginBottom: 16,
  },
  btnSuccessContainer: {
    width: "50%",
    padding: 10
  },
  btnDangerContainer: {
      padding: 10
  },
  btnDanger: {
      backgroundColor: "#E62727",
  },
  btnSuccess: {
      backgroundColor: "#28a745",
  },
  btnContainer: {
    margin: 5,
  },
  createAccount: {
    color: "#007bff",
  },
})