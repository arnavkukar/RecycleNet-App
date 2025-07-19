import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as config from '../../config';


export default function Dashboard({ isDarkMode }) {
  return (
    <View style={[styles.container, isDarkMode && styles.dark]}>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>
        Welcome to the Leaderboard!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  dark: { backgroundColor: '#111' },
  text: { color: '#000', fontSize: 20 },
  darkText: { color: '#fff' },
});
