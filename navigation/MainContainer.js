import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Dashboard from '../navigation/screens/Dashboard';
import Leaderboard from '../navigation/screens/Leaderboard';
import Settings from '../navigation/screens/Settings';
import Badges from '../navigation/screens/Badges';

const Tab = createBottomTabNavigator();

export default function MainContainer({ isDarkMode, setIsDarkMode }) {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Dashboard') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Leaderboard') {
        iconName = focused ? 'list' : 'list-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      } else if (route.name === 'Badges') {
        iconName = focused ? 'ribbon' : 'ribbon-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#10B981',
    tabBarInactiveTintColor: 'grey',
    tabBarStyle: {
      backgroundColor: isDarkMode ? '#111' : '#fff',
    },
    headerStyle: {
      backgroundColor: isDarkMode ? '#111' : '#fff',
    },
    headerTitleStyle: {
      color: isDarkMode ? '#fff' : '#000',
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Dashboard">
          {(props) => <Dashboard {...props} isDarkMode={isDarkMode} />}
        </Tab.Screen>
        <Tab.Screen name="Leaderboard">
          {(props) => <Leaderboard {...props} isDarkMode={isDarkMode} />}
        </Tab.Screen>
        <Tab.Screen name="Settings">
          {(props) => (
            <Settings {...props} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          )}
        </Tab.Screen>
        <Tab.Screen name="Badges">
          {(props) => <Badges {...props} isDarkMode={isDarkMode} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
