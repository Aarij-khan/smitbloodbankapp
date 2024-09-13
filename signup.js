import React, { useState } from "react";
import { View, Text ,ActivityIndicator } from "react-native";
import { TextInput, Button, Appbar } from "react-native-paper";
import {auth , db} from "./firebase.config";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 



const Signup = ({ navigation }) => {
  const [Name,setName] = useState("");
  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");
  const [isLoading,setIsLoading] = useState(false);

  const handleSignup = () => {

    if (Email != "" && Password != "" ) {
      
 
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    const uid = userCredential.user.uid;
    let userInfo ={Email,Name,uid}
    setDoc(doc(db, "users", uid),userInfo)
		console.log("TCL: handleSignup -> user", userCredential);
  })
  .catch((error) => {
    alert(error.message);
    setIsLoading(false)
  });
}


    
  }

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
        value={Name}
          label="Name"
          mode="outlined"
          style={{ marginBottom: 15, backgroundColor: "white" }}
          outlineColor="#b71c1c"
          activeOutlineColor="#b71c1c"
           onChangeText={(text) => setName(text)}   
        />

        {/* Email Input */}
        <TextInput
        value={Email}
          label="Email"
          mode="outlined"
          style={{ marginBottom: 15, backgroundColor: "white" }}
          outlineColor="#b71c1c"
          activeOutlineColor="#b71c1c"
          onChangeText={(text) => setEmail(text)} 
        />

        {/* Password Input */}
        <TextInput
        value={Password}
          label="Password"
          mode="outlined"
          secureTextEntry
          style={{ marginBottom: 15, backgroundColor: "white" }}
          outlineColor="#b71c1c"
          activeOutlineColor="#b71c1c"
          onChangeText={(e)=>setPassword(e)} 
        />

        {isLoading?<ActivityIndicator size={50}/>:
        <Button
          mode="contained"
          style={{ marginTop: 20, borderRadius: 8 ,padding:4,fontWeight:"bold"}}
          onPress={handleSignup}
          buttonColor="#b71c1c"
        >
          Sign Up
        </Button>
        }

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
