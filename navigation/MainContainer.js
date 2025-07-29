import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, StatusBar } from 'react-native';

import Dashboard from '../navigation/screens/Dashboard';
import Leaderboard from '../navigation/screens/Leaderboard';
import Settings from '../navigation/screens/Settings';
import Badges from '../navigation/screens/Badges';
import Zones from '../navigation/screens/Zones';
import AccountInfo from '../navigation/screens/AccountInfo'; // <--- Add this line

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainContainer({ isDarkMode, setIsDarkMode }) {
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
    tabBarInactiveTintColor: 'grey',
    tabBarStyle: {
      backgroundColor: isDarkMode ? '#111' : '#f2f2f2',
    },
    headerShown: false,
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
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? '#111' : '#f2f2f2' }}>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} translucent backgroundColor="transparent" />
        <Stack.Navigator>
          <Stack.Screen name="Main" component={TabScreens} options={{ headerShown: false }} />
          <Stack.Screen name="AccountInfo">
            {(props) => <AccountInfo {...props} isDarkMode={isDarkMode} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
