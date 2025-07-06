import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Dashboard({ isDarkMode }) {
  return (
    <View style={[styles.container, isDarkMode && styles.dark]}>
      <Text style={[styles.head]}>
        Welcome Arnav!
      </Text>
      <Text style={[styles.description]}>
        Track your cleanups and watch your impact grow.
      </Text>
      <View style={styles.divider} />
      <Text style={[styles.subhead]}>
        This Week's Impact
      </Text>
      <View style={styles.divider} />

      <View style={styles.impactItem}>
        <Text style={[styles.impactLabel, isDarkMode && styles.darkText]}>🧹 Cleanups Completed</Text>
        <Text style={styles.impactValue}>3</Text>
      </View>

      <View style={styles.impactItem}>
        <Text style={[styles.impactLabel, isDarkMode && styles.darkText]}>🗑️ Trash Collected</Text>
        <Text style={styles.impactValue}>5.2 lbs</Text>
      </View>

      <View style={styles.impactItem}>
        <Text style={[styles.impactLabel, isDarkMode && styles.darkText]}>📍 Zones Monitored</Text>
        <Text style={styles.impactValue}>2</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 30 },
  dark: { backgroundColor: '#111' },
  head: { color: '#10B981', fontSize: 40, fontWeight: "bold" },
  divider: { height: 1, backgroundColor: '#CCCCCC', width: '90%', alignSelf: 'center', marginTop: 23 },
  description: { color: '#888', fontSize: 12, marginTop: 10 },
  subhead: { color: '#355E3B', fontSize: 25, fontWeight: "bold", marginTop: 20, alignSelf: 'flex-start', paddingLeft: 20 },
  impactItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  impactLabel: { fontSize: 16, color: '#333', fontWeight: '500' }, // default light mode color
  darkText: { color: '#ddd' }, // color for dark mode text
  impactValue: { fontSize: 16, fontWeight: 'bold', color: '#10B981' }
});
