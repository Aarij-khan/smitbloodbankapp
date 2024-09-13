import React from "react";
import { View, Text } from "react-native";
import { TextInput, Button, Appbar } from "react-native-paper";


const Signup = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff5f5" }}>
      {/* Header */}
      <Appbar.Header style={{ backgroundColor: "#b71c1c" }}>
        <Appbar.Content title="Sign Up" />
      </Appbar.Header>

      {/* Form */}
      <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        {/* Name Input */}
        <TextInput
          label="Name"
          mode="outlined"
          style={{ marginBottom: 15, backgroundColor: "white" }}
          outlineColor="#b71c1c"
          activeOutlineColor="#b71c1c"
        />

        {/* Email Input */}
        <TextInput
          label="Email"
          mode="outlined"
          style={{ marginBottom: 15, backgroundColor: "white" }}
          outlineColor="#b71c1c"
          activeOutlineColor="#b71c1c"
        />

        {/* Password Input */}
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={{ marginBottom: 15, backgroundColor: "white" }}
          outlineColor="#b71c1c"
          activeOutlineColor="#b71c1c"
        />

        {/* Submit Button */}
        <Button
          mode="contained"
          style={{ marginTop: 20, borderRadius: 5 }}
          onPress={() => navigation.navigate('Home')}
          buttonColor="#b71c1c"
        >
          Sign Up
        </Button>

        {/* Login Link */}
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
          <Text>Already have an account? </Text>
          <Text
            style={{ color: "#b71c1c", fontWeight: "bold" }}
            onPress={() => navigation.navigate('login')}
          >
            Login
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;
