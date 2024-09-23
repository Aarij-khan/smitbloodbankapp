import { View, Text } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";

const Onboardingscreen = ({ navigation }) => {

 
  return (
    <View style={{ flex: 1 }}>
      <Onboarding
      onDone={()=>navigation.navigate("Home")}
      onSkip={()=>navigation.navigate("Home")}
        pages={[
        
          {
            backgroundColor: "white",
            image: (
              <View>
                <LottieView
                  source={require("./assets/blood3.json")}
                  autoPlay
                  loop
                  style={{
                    marginTop:-60,
                    width: 300,
                    height: 230,
                    marginBottom:-60
                  }}
                />
              </View>
            ),

            title: (
              <Text style={{fontSize:24,fontWeight:'bold'}}>Welcome to Blood Bank App</Text>
            ),
            subtitle: (
              <Text style={{fontSize:19,marginTop:10,fontWeight:'semibold'}}>Save lives by Donating blood</Text>
            ),
          },
          {
            backgroundColor: "crimson",
            image: (
              <View>
                <LottieView
                  source={require("./assets/blood6.json")}
                  autoPlay
                  loop
                  style={{
                    marginTop:-85,
                    width: 355,
                    height: 190,
                  }}
                />
              </View>
            ),
            title: (
              <Text style={{fontSize:24,color:'white',fontWeight:'bold'}}>Professional Doctors</Text>
            ),
            subtitle: (
              <Text style={{fontSize:16,color:'white',marginTop:10,fontWeight:'semibold'}}>Certified Oocters from Top notch Unversities</Text>
            ),
          },
        ]}
      />
    </View>
  );
};

export default Onboardingscreen;
