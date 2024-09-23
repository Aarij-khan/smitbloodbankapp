import { View, Text ,ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase.config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Donorform = () => {
    const [Name, setuserName] = useState("");
    const [Email, setEmail] = useState("");
    const [group, setGroup] = useState("");
    const [Loading, setIsLoading] = useState(false);
    const [uid, setUid] = useState('');
    console.log("🚀 ~ Donorform ~ uid:", uid)
    const [age, setage] = useState('');


    async function getUser() {
      let ourUid = await AsyncStorage.getItem("uid")
      setUid(ourUid)
      console.log("ourUid:", ourUid)
    }
  
    useEffect(()=>{
      getUser()
    },[])

    async function handlesubmit() {
        if (Email != "" && Name != "" && group != "" && age != "" ) {
            setIsLoading(true)
           
            let userInfo ={Email,Name,group,uid}
           
            await setDoc(doc(db, "users", uid),userInfo)
            setIsLoading(false)
            setuserName('')
            setGroup('')
            setEmail('')
            setage('')
        }else{
            alert("Enter details")
            setIsLoading(false)
        }
    }
  return (
    <View style={{flex:1,justifyContent:'center',gap:10,margin:15}}>
        <Text style={{ fontSize: 30,fontWeight:'bold',width:300,marginLeft:30,marginBottom:20}}>
               To become a Donor please fill the form
              </Text>
      <TextInput
      label="Username"
      value={Name}
      onChangeText={text => setuserName(text)}
    />
      <TextInput
      label="Email"
      value={Email}
      onChangeText={text => setEmail(text)}
    />
      <TextInput
      label="Group"
      value={group}
      onChangeText={text => setGroup(text)}
    />
      <TextInput
      label="Age"
      value={age}
      onChangeText={text => setage(text)}
    />
    {Loading ? <ActivityIndicator size={50}/>:
     <Button
          mode="contained"
          style={{ marginTop: 20, borderRadius: 8 ,padding:4,fontWeight:"bold"}}
          onPress={handlesubmit}
          buttonColor="#b71c1c"
        >
          submit
        </Button>
        }
    </View>
  )
}

export default Donorform