import { Dimensions, StyleSheet, View, Text, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Button, Image, Icon, Divider } from "@rneui/base";
import * as Location from 'expo-location'
import * as Permission from 'expo-permissions'
import MapWiew, { Marker } from 'react-native-maps'

const widthScreen = Dimensions.get('window').width;

export default function ChangeAddress(props) {
  const { setShowModal } = props;
    const [location, setLocation] = useState(null);
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
  const save = () => console.log("Guardada la Localizacion", location);

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