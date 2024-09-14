import { View, Text,Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper';
import moment from 'moment';
import { collection, addDoc, query, where, onSnapshot  } from "firebase/firestore";
import { db } from '../firebase.config';


const Chat = ({ route }) => {
  const { client } = route.params;
   console.log(client.uid, `samne wali ki uid`);
   console.log(client.myuid, `meri uid`);
   
  
  const [input,setInput] = useState("");
  const [Chat, setChat] = useState([]);
	console.log("TCL: Chat -> Chat", Chat)
  

  useEffect(() => {
    const q = query(collection(db, "Msg"))
    // where(client.myuid, "==", true));
    //  where(client.uid, "==", true),
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
  }, [client.myuid]);


  async function sendMsg() {
    
    const resolvedUID = client.myuid;
    const UID = client.uid;
    try {
      const docRef = await addDoc(collection(db, "Msg"), {
        input,
        [resolvedUID]: true,
        senderId: resolvedUID,
        createdAt: Date.now(),
        [UID] : true,
      });
      console.log("Documentchale gaya ", docRef);
      setInput("")
    } catch (e) {
      console.error("data sending Error adding document: ", e);
    }
    
  }
  return (
    <View>
      {Chat.map((e,idx)=>{
        return(
          <ScrollView>

         
          <View style={{
            width: '100%',
            backgroundColor:"green",
            display: 'flex',
            padding:10,
            marginTop:10,
            justifyContent: client.uid == e.senderId ? 'flex-end' : 'flex-start',
          }}>
          <View key={idx} className={`h-33 bg-green-100 border-2 w-36 rounded-xl p-2`}>
            <Text>{e.input}</Text>
            <Text>{moment(e.createdAt).startOf('second').fromNow()}</Text>
          </View>

          </View>
          </ScrollView>
        )
      })}
    <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:610,gap:10}}>
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
      <View>
       <Image
      
            style={{height:30,width:40,objectFit:'contain',}}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarwDySHjJyGp-Va5nbW4Nkr8eGIUD0cbTPQ&s' }}
          />
          </View>
    </View>
    </View>

  )
}

export default Chat