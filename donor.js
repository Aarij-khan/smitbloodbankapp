import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "./firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import { useFocusEffect } from "@react-navigation/native";
const Donor = ({ navigation }) => {
  const [displayUser, setdisplayUser] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [myuid, setMyuid] = useState("");


 

  useEffect(() => {
    setLoading(true);

    const unsubscribe = onSnapshot(collection(db, "users"), (data) => {
      let list = [];
      data.forEach((doc) => {
        list.push(doc.data());
      });
      setdisplayUser(list);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);


  useFocusEffect(
    useCallback(() => {
      const checkUsersOnFocus = async () => {
        try {
          let TokenUid = await AsyncStorage.getItem("uid");
          setMyuid(TokenUid);
          console.log("TokenUid fetched on focus:", TokenUid);
        } catch (error) {
          console.log("Error retrieving uid on focus:", error);
        }
      };

      checkUsersOnFocus();


    }, []) 
  );

  // async function checkUsers() {
  //   try {
  //     let TokenUid = await AsyncStorage.getItem("uid"); 
  //       setMyuid(TokenUid);
  //       console.log("TokenUid  mili gayi",TokenUid);
  //   } catch (error) {
  //     console.log("Error retrieving uid:", error);
  //   }
  // }

  
  // async function checkUsers() {
  //   let TokenUid = await AsyncStorage.getItem("uid");
  //   if (TokenUid != null) {
  //     setMyuid(TokenUid);
  //     console.log("TokenUid mil gayi:", TokenUid);
  //   }
  // }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginHorizontal: 15 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              marginBottom: 10,
              fontWeight: "bold",
              color: "red",
            }}
          >
            Blood Donor List
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              marginBottom: 20,
              fontWeight: "bold",
            }}
          >
            Chat with donor
          </Text>
          {Loading ? (
            <ActivityIndicator size={70} style={{ marginTop: 160 }} />
          ) : (
            displayUser.map((e, idx) => {
              return (
                <View
                  key={idx}
                  style={{
                    display: "flex",
                    gap: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 20,
                    borderBottomWidth: 2,
                  }}
                >
                  <Text style={{ fontSize: 22 }}>{e.Name}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("chat", { client: { ...e, myuid } })
                    }
                  >
                    <Text>Message</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Donor;
