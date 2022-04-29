import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import MapView, { LatLng, Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
// import { TextInput as a } from "react-native-paper";
export default function MapScreen() {
  const [text, setText] = React.useState("");
  const GOOGLE_API_KEY="AIzaSyCopO1UJiRDeVAoNHgHRcb6XO6K1FPeX8g";
  const [origin, setOrigin] = React.useState<LatLng>({
    latitude: -12.212491294557104,
    longitude: -76.90755141989148,
    // latitudeDelta: 0.0922,
    // longitudeDelta: 0.0421,
  });
  const [destination, setDestination] = React.useState<LatLng>({
    latitude: -12.213623818159872,
    longitude: -76.90724702814484,
    // latitudeDelta: 0.0922,
    // longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          // autoComplete={false}
          placeholder="Busque su Tiendita..."
          // activeUnderlineColor="#000"
          // label="Buscar..."
          style={styles.input}
          value={text}
          focusable={false}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          draggable
          coordinate={origin}
          onDragEnd={(e) => setOrigin(e.nativeEvent.coordinate)}
        />
        <Marker
          draggable
          coordinate={destination}
          onDragEnd={(e) => setDestination(e.nativeEvent.coordinate)}
        />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_API_KEY}
        />
        {/* <Polyline
          coordinates={[origin, destination]}
          // strokeWidth={6}
          // strokeColor="red"
        /> */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInput: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 0,
    paddingLeft: 20,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    padding: 10,
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
