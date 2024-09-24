import { View, Text,Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper';
import moment from 'moment';
import { collection, addDoc, query, where, onSnapshot  } from "firebase/firestore";
import { db } from '../firebase.config';
import { useRoute } from '@react-navigation/native';


const Chat = () => {
  const route = useRoute();
  const { client } = route.params; 
   console.log(client.uid, `samne wali ki uid`);
   console.log(client.myuid, `meri uid`);
  
  const [input,setInput] = useState("");
  const [Loading,setLoading] = useState(false);
  const [isLoading,setisLoading] = useState(false);
  const [Chat, setChat] = useState([]);
  

  useEffect(() => {
    setisLoading(true)
    const q = query(collection(db, "Msg"),where(client.myuid, "==", true),where(client.uid, "==", true));
     
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      const sortList = list.sort((a,b)=> a.createdAt - b.createdAt)
      setChat(sortList)
      setisLoading(false)
      
    });
    return () => unsubscribe()
  }, []);


  async function sendMsg() {
    if (input != "") {
      setLoading(true)
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
      setLoading(false)
    } catch (e) {
      console.error("data sending Error adding document: ", e);
      setLoading(false)
    }
  }else{
    alert('Please write message')
  }
  }
  return (
    <View>
    <View  style={{width:'100%',backgroundColor:'#DC3500',height:'100%',padding:8}}>
        {isLoading?<ActivityIndicator size={69} style={{marginTop:'75%'}}/>:
      <ScrollView style={{marginBottom:80}}>

      {Chat.map((e,idx)=>{
        return(
          <View key={idx} style={{width:'100%',  display: 'flex', alignItems: client.myuid == e.senderId ? 'flex-end' : 'flex-start'}}>
          <View  style={{
            width: '40vw',
            backgroundColor:"lightgreen",
            borderRadius:10,
            padding:10,
            marginTop:8,
           
          }}>
            <Text style={{fontSize:16}}>{e.input}</Text>
            <Text>{moment(e.createdAt).startOf('second').fromNow()}</Text>
          </View>
          </View>
        )
      })}
      </ScrollView>
      }
      </View>
    <View style={{display:'flex',flexDirection:'row',gap:2,alignItems:'center',width:'100%',backgroundColor:"#DC3500",position:'absolute',top:'87%',padding:2}}>
      <TextInput 
      style={{width:290,marginHorizontal:10}}
        label="Messages"
          mode="outlined"
           outlineColor="#b71c1c"
          activeOutlineColor="#b71c1c"
      value={input}
      onChangeText={(text)=>setInput(text)}

      />
      {Loading?<ActivityIndicator size={38}/>:
      <TouchableOpacity  onPress={sendMsg} >
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/60/60525.png'}} style={{height:30,width:30,marginTop:4}}/>
      </TouchableOpacity>
      }
    </View>

    </View>

  )
}

export default Chat