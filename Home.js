import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { db } from "./firebase.config";
import { collection, getDocs } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from "lottie-react-native";
const Home = ({ navigation }) => {
  const [displayUser, setdisplayUser] = useState([]);
  const [myuid, setMyuid] = useState("");

  function handlelogout() {
    let asss = AsyncStorage.removeItem("uid").then(() => {
      console.log("UID removed from AsyncStorage");
    });
    console.log(" asss", asss);
    navigation.navigate("Login");
  }
  async function getUsers() {
    let uid = await AsyncStorage.getItem("uid");
    setMyuid(uid);
    const querySnapshot = await getDocs(collection(db, "users"));
    let list = [];
    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    setdisplayUser(list);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Donate Bank </Text>
        <View style={styles.navbarActions}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.navbarButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlelogout}>
            <Text style={styles.navbarButton}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* First Image Section */}
        <View style={styles.imageSection}>
          <Image
            style={styles.image}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOV1yncgK5JEZQbspnBt4TE0mx35tvEAI8cQ&s",
            }}
          />
          <Text style={styles.imageTitle}>Blood Donation Saves Lives</Text>
          <Text style={styles.imageText}>
            Every unit of blood donated can help save up to three lives. Blood
            is essential for surgeries, trauma care, and treating chronic
            conditions.
          </Text>
        </View>

        {/* Request Blood Button */}
        <TouchableOpacity
          style={styles.requestButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={styles.requestButtonText}
            onPress={() => navigation.navigate("Login")}
          >
            Request Blood
          </Text>
        </TouchableOpacity>

        {/* Second Image Section */}
        <View style={styles.imageSection}>
          <Image
            style={styles.image}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FFsidwrd-urXapLnq_zyfzq20bpCBlZlYQ&s",
            }}
          />
          <Text style={styles.imageTitle}>Be a Hero, Donate Blood</Text>
          <Text style={styles.imageText}>
            Donating blood has numerous benefits. It not only helps save lives
            but also can improve the donor’s health.
          </Text>
        </View>

        {/* Third Image Section */}
        <View style={styles.imageSection}>
          <Image
            style={styles.image}
            source={{
              uri: "https://s3.eu-west-2.amazonaws.com/img.creativepool.com/files/candidate/portfolio/full/1914851.jpg",
            }}
          />
          <Text style={styles.imageTitle}>Donate blood for more lives</Text>
          <Text style={styles.imageText}>
            Your donation makes a big difference in the lives of those in need.
            Get involved and make an impact.
          </Text>
        </View>
        <View style={styles.imageSection}>
          <Image
            style={styles.image}
            source={{
              uri: "https://media.istockphoto.com/id/1401899005/photo/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-in-lab-preparation-for.jpg?s=612x612&w=0&k=20&c=s2cKa10sW16RwTBkUWFF4OjG7rkPzylsESJhvtPbNZc=",
            }}
          />
          <Text style={styles.imageTitle}>Make a Difference Today</Text>
          <Text style={styles.imageText}>
            Your donation makes a big difference in the lives of those in need.
            Get involved and make an impact.
          </Text>
        </View>
        <LottieView
          source={require("./assets/blood.json")}
          autoPlay
          loop
          style={{
            width: 320,
            height: 200,
            backgroundColor: "red",
            marginBottom: 20,
          }}
        />
        <TouchableOpacity
          style={styles.requestButton}
          onPress={() => navigation.navigate("doctorscreen")}
        >
          <Text
            style={styles.requestButtonText}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}
            Blood group
          </Text>
        </TouchableOpacity>
        <LottieView
          source={require("./assets/blood2.json")}
          autoPlay
          loop
          style={{
            width: 320,
            height: 200,
            backgroundColor: "red",
            marginBottom: 20,
          }}
        />
        <TouchableOpacity
          style={styles.requestButton}
          onPress={() => console.log("Request Blood")}
        >
          <Text
            style={styles.requestButtonText}
            onPress={() => navigation.navigate("doctorscreen")}
          >
            Connect with Doctors
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 32,
            textAlign: "center",
            paddingBottom: 30,
            marginTop: 60,
          }}
        >
          Donate Blood
        </Text>
        {displayUser.map((e, idx) => {
          return (
            <View
              key={idx}
              style={{
                display: "flex",
                gap: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
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
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop:30
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#b71c1c",
    height: 80,
  },
  navbarTitle: {
    fontSize: 20,
    paddingTop: 10,
    color: "#fff",
    alignItems: "center",
    fontWeight: "bold",
    paddingLeft: 10,
  },
  navbarActions: {
    flexDirection: "row",
  },
  navbarButton: {
    color: "#fff",
    fontSize: 16,
    paddingTop: 10,
    marginRight: 30,
  },
  contentContainer: {
    padding: 20,
    
  },
  imageSection: {
    marginBottom: 20,
    marginTop:20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  imageText: {
    fontSize: 16,
    textAlign: "center",
  },
  requestButton: {
    backgroundColor: "#b71c1c",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  requestButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Home;
