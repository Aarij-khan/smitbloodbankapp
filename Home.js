import React, { useEffect } from 'react';
import { View, Text, Image, Dimensions, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { navigation } from "@react-navigation/native";

import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = ({navigation}) => {




  return (
    <SafeAreaView style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Blood Bank App</Text>
        <View style={styles.navbarActions}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navbarButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => AsyncStorage.removeItem("uid")}>
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
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOV1yncgK5JEZQbspnBt4TE0mx35tvEAI8cQ&s' }}
          />
          <Text style={styles.imageTitle}>Blood Donation Saves Lives</Text>
          <Text style={styles.imageText}>
            Every unit of blood donated can help save up to three lives. Blood is essential for surgeries, trauma care, and treating chronic conditions.
          </Text>
        </View>

        {/* Request Blood Button */}
        <TouchableOpacity style={styles.requestButton} onPress={() => console.log('Request Blood')}>
          <Text style={styles.requestButtonText}>Request Blood</Text>
        </TouchableOpacity>

        {/* Second Image Section */}
        <View style={styles.imageSection}>
          <Image
            style={styles.image}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FFsidwrd-urXapLnq_zyfzq20bpCBlZlYQ&s' }}
          />
          <Text style={styles.imageTitle}>Be a Hero, Donate Blood</Text>
          <Text style={styles.imageText}>
            Donating blood has numerous benefits. It not only helps save lives but also can improve the donor’s health.
          </Text>
        </View>

        {/* Third Image Section */}
        <View style={styles.imageSection}>
          <Image
            style={styles.image}
            source={{ uri: 'https://s3.eu-west-2.amazonaws.com/img.creativepool.com/files/candidate/portfolio/full/1914851.jpg' }}
          />
          <Text style={styles.imageTitle}>Make a Difference Today</Text>
          <Text style={styles.imageText}>
            Your donation makes a big difference in the lives of those in need. Get involved and make an impact.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign:'center',
    backgroundColor: '#b71c1c',
    height:90,
  },
  navbarTitle: {
    fontSize: 20,
    paddingTop:10,
    color: '#fff',
    alignItems:'center',
    fontWeight: 'bold',
    paddingLeft:5,
  },
  navbarActions: {
    flexDirection: 'row',
  },
  navbarButton: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 26,
    paddingTop:10,
  },
  contentContainer: {
    padding: 20,
  },
  imageSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  imageText: {
    fontSize: 16,
    textAlign: 'center',
  },
  requestButton: {
    backgroundColor: '#b71c1c',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  requestButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;
