import { Dimensions, StyleSheet, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Input, Button, Image, Icon, Text, Divider } from "@rneui/base";
import * as Location from 'expo-location'
import * as Permission from 'expo-permissions'
import MapWiew from 'react-native-maps'

const widthScreen = Dimensions.get('window').width;

export default function ChangeAdress(props) {
  const {isVisibleMap} =props;
  const [address, setAddress] = useState(null);
  const [location, setLocation] = useState(null);
  useEffect(()=>{
    (async ()=> {
        const resultPermission = await Permission.askAsync(Permission.LOCATION);
        const statusPermission = resultPermission.permissions.location.status
        if (resultPermission.status !== 'denied') {
          const loc = await Location.getCurrentPositionAsync({})
          setLocation({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
            latitudDelta: 0.001,
            longitudDelta: 0.001
          })
        } else {
          const loc = await Location.getCurrentPositionAsync({})
          setAddress(loc);
        }
    })()
  },[]);
  return (
    <View style={styles.container}>
      {location && (
        <MapWiew style={styles.map} initialRegion={location} showsUserLocation={true} onRegionChange={(region)=> setLocation(region)}>
          <MapWiew.Marker coordinate={{latitude: location.latitude, longitude: location.longitude}}/>
        </MapWiew>
      )}
      <View style={{flex: 1, alignItems: "center", marginTop: 10}}>
        <Divider style={styles.divider}/>
      </View>
      <View>
        <Text style={styles.text}>Cambiar Dirección</Text>
      </View>
      <Image
          source={require("../../../../../assets/mapa.png")}
          resizeMode="contain"
          style={styles.logotype}
        />
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
          buttonStyle={styles.btnClose}
          containerStyle={styles.btnContainer}
          onPress={()=>isVisibleMap(false)}
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
          buttonStyle={styles.btnSuccess}
          containerStyle={styles.btnContainer}
          onPress={()=>isVisibleMap(true)}
        />
      </View>
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
    height: 120,
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