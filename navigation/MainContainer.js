import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, StatusBar, View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import {} from 'react-native';

import Dashboard from '../navigation/screens/Dashboard';
import Leaderboard from '../navigation/screens/Leaderboard';
import Settings from '../navigation/screens/Settings';
import Badges from '../navigation/screens/Badges';
import Zones from '../navigation/screens/Zones';
import AccountInfo from '../navigation/screens/AccountInfo';

import * as config from '../../config';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainContainer({ isDarkMode, setIsDarkMode }) {
  const MyTheme = {
    dark: isDarkMode,
    colors: {
      primary: config.PRIMARY_ACCENT,
      background: isDarkMode ? '#000' : '#f2f2f2',
      card: '#fff',
      text: isDarkMode ? '#fff' : '#000',
      border: 'gray',
      notification: 'tomato',
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Dashboard') iconName = focused ? 'home' : 'home-outline';
      else if (route.name === 'Leaderboard') iconName = focused ? 'list' : 'list-outline';
      else if (route.name === 'Settings') iconName = focused ? 'settings' : 'settings-outline';
      else if (route.name === 'Badges') iconName = focused ? 'ribbon' : 'ribbon-outline';
      else if (route.name === 'My Zones') iconName = focused ? 'location' : 'location-outline';

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#10B981',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: '#fff',
    },
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#000',
  });

  const TabScreens = () => (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Dashboard">
        {(props) => <Dashboard {...props} isDarkMode={isDarkMode} />}
      </Tab.Screen>
      <Tab.Screen name="Leaderboard">
        {(props) => <Leaderboard {...props} isDarkMode={isDarkMode} />}
      </Tab.Screen>
      <Tab.Screen name="Settings">
        {(props) => <Settings {...props} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
      </Tab.Screen>
      <Tab.Screen name="Badges">
        {(props) => <Badges {...props} isDarkMode={isDarkMode} />}
      </Tab.Screen>
      <Tab.Screen name="My Zones">
        {(props) => <Zones {...props} isDarkMode={isDarkMode} />}
      </Tab.Screen>
    </Tab.Navigator>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? '#000' : '#f2f2f2' }}>
      <NavigationContainer theme={MyTheme}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          translucent
          backgroundColor="transparent"
        />
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Main" component={TabScreens} />
          <Stack.Screen name="Account">
            {(props) => <AccountInfo {...props} isDarkMode={isDarkMode} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
