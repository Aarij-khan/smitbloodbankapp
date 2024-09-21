import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Doctorscreen = () => {
  return (
    <View>
      <View>
        <LottieView
          source={require("./assets/blood3.json")}
          autoPlay
          loop
          style={{
            width: 355,
            height: 250,
            backgroundColor: "white",
          }}
        />
      </View>
      <View
        style={{
          height: "66%",
          width: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: "#DC3545",
          display: "flex",
          // justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            width: 300,
            marginLeft: 35,
            marginBottom: 20,
            marginTop:80,
            color:'white'
          }}
        >
          Book an Appointment
        </Text>
        <TouchableOpacity>
        <Button
          mode="contained"
          style={{ marginTop: 20, borderRadius: 8 ,padding:4,fontWeight:"bold",marginHorizontal:20,fontSize:30}}
          buttonColor="white"
          textColor="red"
          labelStyle={{fontSize:21,fontWeight:"bold"}}
        >
          Call us
        </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Doctorscreen;
