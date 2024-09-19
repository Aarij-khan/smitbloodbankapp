import { View, Text,Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper';
import moment from 'moment';
import { collection, addDoc, query, where, onSnapshot  } from "firebase/firestore";
import { db } from '../firebase.config';
import { useRoute } from '@react-navigation/native';


const Chat = () => {
  const route = useRoute();
  const { client } = route.params; 
   console.log("TCL: Chat -> client", client)
   console.log(client.uid, `samne wali ki uid`);
   console.log(client.myuid, `meri uid`);
  
  const [input,setInput] = useState("");
  const [Chat, setChat] = useState([]);
  

  useEffect(() => {
    const q = query(collection(db, "Msg"),where(client.myuid, "==", true),where(client.uid, "==", true));
     
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      console.log("TCL: unsubscribe -> list", list)
      
      const sortList = list.sort((a,b)=> a.createdAt - b.createdAt)
      setChat(sortList)
    });
    return () => unsubscribe()
  }, [client]);


  async function sendMsg() {
    try {
      const docRef = await addDoc(collection(db, "Msg"), {
        input,
        [client.myuid]: true,
        senderId: client.myuid,
        createdAt: Date.now(),
        [client.uid] : true,
      });
      console.log("Documentchale gaya ", docRef);
      setInput("")
    } catch (e) {
      console.error("data sending Error adding document: ", e);
    }
    
  }
  return (
    <View >
      {Chat.map((e,idx)=>{
        return(
          <ScrollView key={idx}>
          <View  style={{height:'100%',width:'100%',backgroundColor:'lightgreen',  display: 'flex', justifyContent: client.myuid == e.senderId ? 'flex-end' : 'flex-start',}}>
          <View  style={{
            width: '30%',
            backgroundColor:"purple",
            padding:10,
            marginTop:5,
           
          }}>
            <Text>{e.input}</Text>
            <Text>{moment(e.createdAt).startOf('second').fromNow()}</Text>
          </View>
          </View>
          </ScrollView>
        )
      })}
    <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',justifyContent:'center'}}>
      <TextInput 
      style={{width:290,marginLeft:10}}
        label="Messages"
          mode="outlined"
           outlineColor="#b71c1c"
          activeOutlineColor="#b71c1c"
      value={input}
      onChangeText={(text)=>setInput(text)}

      />
      <TouchableOpacity  onPress={sendMsg}>
         <Text>Send</Text>
      </TouchableOpacity>
    </View>

    </View>

  )
}

export default Chat