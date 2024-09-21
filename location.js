import React from "react";
import { StyleSheet, View, Image } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const Location = () => {
  return (
    <View>
      <MapView
        style={{ height: "100%", width: "100%" }}
        initialRegion={{
          latitude: 24.8966,
          longitude: 67.1847,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker coordinate={{ latitude: 24.8966, longitude: 67.1847 }}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/535/535239.png",
            }}
            style={{ width: 40, height: 40 }} 
            resizeMode="contain"
          />
        </Marker>
      </MapView>
    </View>
  );
};

export default Location;
