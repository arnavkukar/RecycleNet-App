import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as config from '../../config';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Settings({ isDarkMode, setIsDarkMode }) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, isDarkMode && styles.dark]}>
      <Text style={[styles.header, isDarkMode && styles.darkHeader]}>Settings</Text>

      {/* Dark Mode Toggle */}
      <View style={[styles.darkSetting]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name={isDarkMode ? 'moon' : 'moon-outline'}
            size={22}
            color={isDarkMode ? '#FFF' : '#000'}
            style={{ marginRight: 8 }}
          />
          <Text style={[styles.text, isDarkMode && styles.darkText]}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
      </View>


      {/* Navigate to Account Info */}
      <TouchableOpacity
        style={[styles.optionBox, isDarkMode && styles.optionBoxDark]}
        onPress={() => navigation.navigate('Account')}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name="person-circle-outline"
            size={26}
            color={isDarkMode ? '#FFF' : '#000'}
            style={{ marginLeft: -16 }}
          />
          <Text style={[styles.optionText, isDarkMode && styles.darkText]}>
            Account
          </Text>
        </View>
        <Text style={[styles.arrow, isDarkMode && styles.darkText]}>{'>'}</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#F2F2F2',
  },
  dark: {
    backgroundColor: '#111',
  },
  header: {
    //color: config.PRIMARY_ACCENT,
    //fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  darkText: {
    color: '#FFF',
  },
  darkHeader: {
    color: config.PRIMARY_ACCENT
  },
  darkSetting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  optionBox: {
    width: '80%',
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  optionBoxDark: {
    backgroundColor: '#111',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 7,
  },
  arrow: {
    fontSize: 18,
  },
});
