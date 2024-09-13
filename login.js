import React from "react";
import { View, Text } from "react-native";
import { TextInput, Button, Appbar } from "react-native-paper";

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <Appbar.Header style={{ backgroundColor: "#b71c1c" }}>
        <Appbar.Content title="Login" />
      </Appbar.Header>

      {/* Form */}
      <View style={{
        flex: 1,
        justifyContent: 'center', 
        paddingHorizontal: 20,
      }}>
        {/* Email Input */}
        <TextInput
          label="Email"
          mode="outlined"
          style={{ marginBottom: 20 }}
          autoCompleteType="email"
        />

        {/* Password Input */}
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={{ marginBottom: 20 }}
          autoCompleteType="password"
        />

        {/* Forgot Password */}
        <Text style={{
          textAlign: "right",
          color: "#b71c1c",
          marginBottom: 20,
        }}>
          Forgot Password?
        </Text>

        {/* Login Button */}
        <Button
          mode="contained"
          style={{
            marginTop: 10,
            backgroundColor: "#b71c1c",
          }}
          onPress={() => navigation.navigate('signup')}
        >
          Login
        </Button>

        {/* Signup Link */}
        <View style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}>
          <Text>Don’t have an account? </Text>
          <Text
            style={{
              color: "#b71c1c",
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate('signup')}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
