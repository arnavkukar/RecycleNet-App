import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as config from '../../config';

export default function Settings({ isDarkMode, setIsDarkMode }) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, isDarkMode && styles.dark]}>
      <Text style={[styles.header, isDarkMode && styles.darkText]}>Settings</Text>

      {/* Dark Mode Toggle */}
      <View style={[styles.darkSetting]}>
        <Text style={[styles.text, isDarkMode && styles.darkText]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
          trackColor={{ false: '#767577', true: config.PRIMARY_ACCENT }}
          thumbColor={isDarkMode ? '#fff' : config.PRIMARY_ACCENT}
        />
      </View>

      {/* Navigate to Account Info */}
      <TouchableOpacity
        style={[styles.optionBox, isDarkMode && styles.optionBoxDark]}
        onPress={() => navigation.navigate('AccountInfo')}
      >
        <Text style={[styles.optionText, isDarkMode && styles.darkText]}>
          Account Info
        </Text>
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
    backgroundColor: '#FFF',
  },
  dark: {
    backgroundColor: '#111',
  },
  header: {
    color: config.PRIMARY_ACCENT,
    fontWeight: 'bold',
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
  darkSetting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  optionBox: {
    width: '80%',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  optionBoxDark: {
    backgroundColor: '#222',
  },
  optionText: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 18,
  },
});
