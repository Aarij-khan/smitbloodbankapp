import React, { useState } from "react";
import { View, Text ,ActivityIndicator} from "react-native";
import { TextInput, Button, Appbar } from "react-native-paper";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";

const Login = ({ navigation }) => {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [isLoading,setIsLoading] = useState(false);

  function handleLogin() {
    if (email != ""&& password != "") {
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setIsLoading(true)
    const user = userCredential.user;
    navigation.navigate("Home");
    setIsLoading(false);
  })
  .catch((error) => {
     alert(error.message);
     setIsLoading(false)
     
  });
    }
    
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <Appbar.Header style={{ backgroundColor: "#b71c1c" }}>
        <Appbar.Content title="Login" />
      </Appbar.Header>
      <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      {/* Form */}
      <TextInput
        value={email}
          label="Email"
          mode="outlined"
          style={{ marginBottom: 15, backgroundColor: "white" }}
          outlineColor="#b71c1c"
          activeOutlineColor="#b71c1c"
          onChangeText={(text) => setemail(text)} 
        />

        {/* Password Input */}
        <TextInput
        value={password}
          label="Password"
          mode="outlined"
          secureTextEntry
          style={{ marginBottom: 15, backgroundColor: "white" }}
          outlineColor="#b71c1c"
          activeOutlineColor="#b71c1c"
          onChangeText={(e)=>setpassword(e)} 
        />

        {isLoading?<ActivityIndicator size={50}/>:
        <Button
          mode="contained"
          style={{ marginTop: 20, borderRadius: 8 ,padding:4,fontWeight:"bold"}}
          onPress={handleLogin}
          buttonColor="#b71c1c"
        >
          Login
        </Button>
        }

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
           sign up
          </Text>
        </View>
        </View>
      </View>
  );
};

export default Login;
