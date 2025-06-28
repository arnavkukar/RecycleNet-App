import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function Settings({ isDarkMode, setIsDarkMode }) {
  return (
    <View style={[styles.container, isDarkMode && styles.dark]}>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>
        Dark Mode
      </Text>
      <Switch
        value={isDarkMode}
        onValueChange={() => setIsDarkMode(!isDarkMode)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});
