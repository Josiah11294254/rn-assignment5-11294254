// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeProvider } from './ThemeContext';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'My Cards') {
                iconName = 'card-outline';
              } else if (route.name === 'Statistics') {
                iconName = 'stats-chart-outline';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="My Cards" component={HomeScreen} />
          <Tab.Screen name="Statistics" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
