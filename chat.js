import { View, Text } from 'react-native'
import React from 'react'

const Chat = ({ route }) => {
  const { client } = route.params;
	console.log("client", client)
  return (
    <View>
      <Text style={{fontSize:44}}>ugjcbjlcv</Text>
    </View>
  )
}

export default Chat