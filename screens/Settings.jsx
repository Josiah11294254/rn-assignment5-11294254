// screens/SettingsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkTheme(savedTheme === 'dark');
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setIsDarkTheme(!isDarkTheme);
    await AsyncStorage.setItem('theme', newTheme);
  };

  const settingsOptions = [
    { id: '1', title: 'Language' },
    { id: '2', title: 'My Profile' },
    { id: '3', title: 'Contact Us' },
    { id: '4', title: 'Change Password' },
    { id: '5', title: 'Privacy Policy' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={settingsOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.optionContainer}>
            <Text style={styles.optionText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={() => (
          <View style={styles.themeContainer}>
            <Text style={styles.optionText}>Theme</Text>
            <Switch value={isDarkTheme} onValueChange={toggleTheme} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 18,
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 20,
  },
});

export default SettingsScreen;
