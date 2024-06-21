// screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://example.com/user-image.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.userName}>Eric Atsu</Text>
      </View>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: 'https://example.com/credit-card-image.jpg' }}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.transactionContainer}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        {/* Transaction items go here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcomeText: {
    fontSize: 18,
    color: '#555',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  transactionContainer: {
    marginTop: 20,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
