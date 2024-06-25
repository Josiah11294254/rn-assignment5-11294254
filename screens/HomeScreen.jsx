// App.js

import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';
const transactions = [
  {
    id: "1",
    name: "Apple Store",
    category: "Entertainment",
    amount: "- $5.99",
    icon: require("../assets/apple.png"), // Replace with your icon URL
  },
  {
    id: "2",
    name: "Spotify",
    category: "Music",
    amount: "- $12.99",
    icon: require("../assets/spotify.png"), // Replace with your icon URL
  },
  {
    id: "3",
    name: "Money Transfer",
    category: "Transaction",
    amount: "$300",
    icon: require("../assets/moneyTransfer.png"),
  },
  {
    id: "4",
    name: "Grocery",
    category: "Transaction",
    amount: "- $88",
    icon: require("../assets/grocery.png"), // Replace with your icon URL
  },
];

const actions = [
  {
    id: '1',
    name: 'Sent',
    icon: require('../assets/send.png'), // Replace with your icon
  },
  {
    id: '2',
    name: 'Receive',
    icon: require('../assets/recieve.png'), // Replace with your icon
  },
  {
    id: '3',
    name: 'Loan',
    icon: require('../assets/loan.png'), // Replace with your icon
  },
  {
    id: '4',
    name: 'Topup',
    icon: require('../assets/topUp.png'), // Replace with your icon
  },
];

const App = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#161622' : '#fff' }]}>
      <View style={styles.header}>
        <Image
          source={require("../assets/profile.png")} // Replace with your profile image URL
          style={styles.profileImage}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={[styles.nameText , {color: isDark ? 'white' : ''}]}>Josiah Ok</Text>
        </View>
        <View style={styles.searchBg}>
        <Icon name='search'/>
        </View>
      </View>

      <Image
        source={require("../assets/Card.png")} // Replace with your card image URL
        style={styles.cardImage}
      />

<FlatList
        data={actions}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.actions}
        renderItem={({ item }) => (
          <View style={styles.actionButton}>
            <View style={[styles.iconBackground,]}>
              <Image source={item.icon} style={styles.actionIcon} />
            </View>
            <Text style={[styles.actionText,  {color: isDark ? 'white' : ''}]}>{item.name}</Text>
          </View>
        )}
      />

      <View style={[styles.transactionHeader]}>
        <Text style={[styles.transactionTitle , {color: isDark ? '#fafafa' : ''}]}>Transaction</Text>
        <Text style={styles.sellAllText}>Sell All</Text>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.transationView}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
           <View style={[styles.transactionIconBackground, {backgroundColor: isDark ? '#1e1e2d' : '#eee'}]}>
           <Image source={item.icon} style={styles.transactionIcon} />
           </View>
            <View style={styles.transactionDetails}>
              <Text style={[styles.transactionName ,   {color: isDark ? '#fafafa' : 'black'}]}>{item.name}</Text>
              <Text style={[styles.transactionCategory ]}>{item.category}</Text>
            </View>
            <Text style={[styles.transactionAmount ,  {color: isDark ? 'white' : 'black'}]}>{item.amount}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    paddingTop:40
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  headerTextContainer: {
    flex: 1,
  },
  searchBg:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
      height:40,
      width:40, 
      borderRadius:50,
      backgroundColor:'#eee',
      
  },
  welcomeText: {
    fontSize: 16,
    color: "#888",
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardImage: {
    width: "90%",
    height: 180,
    objectFit:"cover",
    borderRadius: 12,
    alignSelf: "center",
    marginVertical: 20,
  },
  iconBackground: {
    // backgroundColor: '#eee',
    borderRadius: 25,
    padding: 15,
    marginBottom: 8,
  },

  actions: {
    marginVertical: 20,
    width:'95%',
    margin:'auto',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  actionButton: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconBackground: {
    backgroundColor: '#eee',
    borderRadius: 25,
    padding: 15,
    marginBottom: 8,
  },
  actionIcon: {
    width: 20,
    height: 20,
  },
  actionText: {
    fontSize: 14,
    color: '#333',
  },
  transactionHeader: {
    width:'95%',
    margin:'auto',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sellAllText: {
    fontSize: 14,
    color: "#007AFF",
  },
  transationView:{
      marginVertical: 20,
      width:'95%',
      margin:'auto',
      display:'flex',
      flexDirection:'column',
      gap:2
  },
  transaction: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  
  transactionIconBackground:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#eee',
    borderRadius: 50,
    padding: 15,
    marginRight:10
  },
  transactionIcon: {
    width: 30,
    height: 30,
    
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionCategory: {
    fontSize: 14,
    color: "#888",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
});

export default App;
