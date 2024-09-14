import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LottieView from "lottie-react-native";
import { ScrollView } from 'react-native';

const Doctorscreen = () => {
    return (
        <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <ScrollView>
             <LottieView
          source={require("./assets/blood3.json")}
          autoPlay
          loop
          style={{
            width: 320,
            height: 200,
            marginBottom: 20,
            marginTop:30
          }}
        />
         <Text style={{textAlign:'center'}}>Connect</Text>
             <LottieView
          source={require("./assets/blood5.json")}
          autoPlay
          loop
          style={{
            width: 320,
            height: 200,
            marginBottom: 20,
            marginTop:30
          }}
        />
         <Text style={{textAlign:'center'}}>Connect</Text>
             <LottieView
          source={require("./assets/blood6.json")}
          autoPlay
          loop
          style={{
            width: 320,
            height: 200,
            marginBottom: 20,
            marginTop:30
          }}
        />
        <Text style={{textAlign:'center',}}>Connect</Text>
             <LottieView
          source={require("./assets/blood4.json")}
          autoPlay
          loop
          style={{
            width: 320,
            height: 200,
            marginBottom: 20,
          }}
        />
        <Text style={{textAlign:'center',}}>Connect</Text>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Doctorscreen;
