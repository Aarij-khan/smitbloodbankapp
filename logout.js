import { View, Text ,StyleSheet,Button} from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Logout = () => {
  const navigation = useNavigation()

  async function handlelogout() {
    try {
      await AsyncStorage.removeItem("uid"); 
      console.log("UID removed from localstorage");
      navigation.navigate("Login");
    } catch (error) {
      console.log("Error removing uid:", error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{marginTop:20,fontSize:29,fontWeight:'bold'}}>Please logout</Text>
      <Button title="Logout" onPress={handlelogout} color="red" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap:20
    },
  });
  
export default Logout;