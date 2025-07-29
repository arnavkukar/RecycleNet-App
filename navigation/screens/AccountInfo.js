import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AccountInfo({ isDarkMode }) {
  const user = {
    name: 'Moshim',
    age: 12,
    email: 'moshim@example.com',
  };

  return (
    <View style={[styles.container, isDarkMode && styles.dark]}>
      <Text style={[styles.header, isDarkMode && styles.darkText]}>Account Info</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user.name}</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{user.age}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
  dark: { backgroundColor: '#111' },
  header: { fontSize: 32, fontWeight: 'bold', marginBottom: 20, color: '#10B981' },
  darkText: { color: '#FFF' },
  infoBox: {
    backgroundColor: '#EEE',
    borderRadius: 10,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    color: '#333'
  },
  value: {
    fontSize: 16,
    color: '#000'
  }
});
