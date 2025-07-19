import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import * as config from '../../config';


export default function Settings({ isDarkMode, setIsDarkMode }) {
  return (
    <View style={[styles.container, isDarkMode && styles.dark]}>
      <Text style={[styles.header, isDarkMode && styles.darkHeader]}>Settings</Text>
      <View style={[styles.darkSetting]}>
        <Text style={[styles.text, isDarkMode && styles.darkText]}>
          Dark Mode
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50 // adjust as needed for comfortable spacing
  },

  dark: {
    backgroundColor: '#111',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  header: {color: config.PRIMARY_ACCENT, fontWeight: 'bold', fontSize: 40, alignSelf: 'center', marginTop: 1},
  darkSetting: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%', marginTop: 30},

});
