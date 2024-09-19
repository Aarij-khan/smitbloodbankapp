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

  async function getUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    let list = [];
    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    setdisplayUser(list);
  }
  async function checkUsers() {
    let TokenUid = await AsyncStorage.getItem("uid");
    setMyuid(TokenUid);
    console.log(" TokenUid mil gayi", TokenUid);
  }
  useEffect(() => {
    checkUsers();
    getUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
          onPress={() => navigation.navigate("Chat with donors")}
        >
          <Text style={styles.requestButtonText}>Chat with donors</Text>
        </TouchableOpacity>
        <LottieView
          source={require("./assets/blood2.json")}
          autoPlay
          loop
          style={{
            width: 320,
            height: 200,
            marginTop: 20,
            backgroundColor: "red",
            marginBottom: 20,
          }}
        />
        <Text style={styles.imageText}>
          Donating blood has numerous benefits. It not only helps save lives but
          also can improve the donor’s health.
        </Text>
        <TouchableOpacity style={styles.requestButton}>
          <Text
            style={styles.requestButtonText}
            onPress={() => navigation.navigate("doctorscreen")}
          >
            Heart beats checkup
          </Text>
        </TouchableOpacity>

        <LottieView
          source={require("./assets/blood4.json")}
          autoPlay
          loop
          style={{
            width: 320,
            height: 200,
            marginTop: 20,
            backgroundColor: "red",
            marginBottom: 20,
          }}
        />
        <Text style={styles.imageText}>
          Donating blood has numerous benefits. It not only helps save lives but
          also can improve the donor’s health.
        </Text>
        <TouchableOpacity style={styles.requestButton}>
          <Text
            style={styles.requestButtonText}
            onPress={() => navigation.navigate("doctorscreen")}
          >
            Consultation with doctors
          </Text>
        </TouchableOpacity>
        <LottieView
          source={require("./assets/blood5.json")}
          autoPlay
          loop
          style={{
            width: 320,
            height: 200,
            marginTop: 20,
            backgroundColor: "red",
            marginBottom: 20,
          }}
        />
        <Text style={styles.imageText}>
          Donating blood has numerous benefits. It not only helps save lives but
          also can improve the donor’s health.
        </Text>
        <TouchableOpacity style={styles.requestButton}>
          <Text
            style={styles.requestButtonText}
            onPress={() => navigation.navigate("doctorscreen")}
          >
            Advice with experience doctors
          </Text>
        </TouchableOpacity>
        <LottieView
          source={require("./assets/blood6.json")}
          autoPlay
          loop
          style={{
            width: 320,
            height: 200,
            marginTop: 20,
            backgroundColor: "red",
            marginBottom: 20,
          }}
        />
        <Text style={styles.imageText}>
          Donating blood has numerous benefits. It not only helps save lives but
          also can improve the donor’s health.
        </Text>

        <TouchableOpacity style={styles.requestButton}>
          <Text
            style={styles.requestButtonText}
            onPress={() => navigation.navigate("doctorscreen")}
          >
            Connect with Doctors
          </Text>
        </TouchableOpacity>
        <LottieView
          source={require("./assets/blood.json")}
          autoPlay
          loop
          style={{
            width: 320,
            marginTop: 20,
            height: 200,
            backgroundColor: "red",
            marginBottom: 20,
          }}
        />
        <Text style={styles.imageText}>
          Donating blood has numerous benefits. It not only helps save lives but
          also can improve the donor’s health.
        </Text>
        <TouchableOpacity style={styles.requestButton}>
          <Text
            style={styles.requestButtonText}
            onPress={() => navigation.navigate("doctorscreen")}
          >
            Donate Blood
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

        <View style={[styles.imageSection]}>
          <Text style={[styles.imageTitle, { marginBottom: 40, fontSize: 26 }]}>
            Our patient reviews
          </Text>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: "column", gap: 15 }}>
              <Image
                style={styles.imgs}
                source={{
                  uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uO9Bn_p8IyMYZ-SNY7jEMtrvxDpliuu4ZA&s'

                }}
              />
              <Text style={[styles.imageTL, {  fontSize: 26 }]}>
               ⭐⭐⭐⭐⭐
              </Text>

              <Text style={styles.imageTxt}>
                Your donation makes a big difference in the lives of those in
                need. Get involved and make an impact.
              </Text>
            </View>
            <View style={{ flexDirection: "column", gap: 15 ,marginLeft:20}}>
              <Image
                style={styles.imgs}
                source={{
                  uri:"https://www.cffhae.org/wp-content/uploads/2014/07/Happy-Patient-1024x683.jpg"
                }}
              />
               <Text style={[styles.imageTL, {  fontSize: 26 }]}>
               ⭐⭐⭐⭐⭐
          </Text>
              <Text style={styles.imageTxt}>
                Your donation makes a big difference in the lives of those in
                need. Get involved and make an impact.⭐
              </Text>
            </View>
            <View style={{ flexDirection: "column", gap: 15 ,marginLeft:20}}>
              <Image
                style={styles.imgs}
                source={{
                  uri:'https://static1.bigstockphoto.com/9/5/8/large1500/85968620.jpg'
                }}
              />
               <Text style={[styles.imageTL, {  fontSize: 26 }]}>
               ⭐⭐⭐⭐⭐
          </Text>
              <Text style={styles.imageTxt}>
                Your donation makes a big difference in the lives of those in
                need. Get involved and make an impact.⭐
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    objectFit: "fill",
  },
  img: {
    width: 300,
    height: 200,
    marginBottom: 10,
    objectFit: "fill",
  },
  imgs: {
    width: 300,
    height: 200,
    objectFit: "fill",
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    marginTop: 20,
  },
  imageTL: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageText: {
    fontSize: 16,
    textAlign: "center",
  },
  imageTxt: {
    fontSize: 16,
    textAlign: "center",
    width: 200,
    marginLeft: 50,
  },
  requestButton: {
    backgroundColor: "#b71c1c",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
    marginTop: 20,
  },
  requestBtn: {
    backgroundColor: "#b71c1c",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  requestButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Home;
