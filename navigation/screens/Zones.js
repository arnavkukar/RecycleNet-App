import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as config from '../../config';
import MapView, { Marker } from 'react-native-maps';

export default function Dashboard({ isDarkMode }) {
  return (
    <View style={[styles.container, isDarkMode && styles.dark]}>
      <Text style={[styles.header]}>
        My Zones
      </Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
          title="Sample Zone"
          description="This is where you cleaned!"
        />
      </MapView>
      <View style={[styles.impactBox, isDarkMode && styles.darkImpactBox]}>
          <Text style={styles.impactHeader}>Your Zone Activity</Text>
          <View style={styles.boxDivider} />

          <View style={styles.impactItem}>
            <Text style={[styles.impactLabel, isDarkMode && styles.darkText]}>🗺️ Zones Cleaned</Text>
            <Text style={styles.impactValue}>2</Text>
          </View>
          <View style={styles.impactItem}>
            <Text style={[styles.impactLabel, isDarkMode && styles.darkText]}>🌿 Acres Covered</Text>
            <Text style={styles.impactValue}>1.5</Text>
          </View>
          <View style={[styles.impactItem, { borderBottomWidth: 0 }]}>
            <Text style={[styles.impactLabel, isDarkMode && styles.darkText]}>📍 Zones Monitored</Text>
            <Text style={styles.impactValue}>1</Text>
          </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50 },
  dark: { backgroundColor: '#111' },
  text: { color: '#000', fontSize: 20 },
  darkText: { color: '#fff' },
  header: { color: config.PRIMARY_ACCENT, fontWeight: 'bold', fontSize: 40, alignSelf: 'center', marginTop: 1 },
  map: { width: '90%', height: 300, borderRadius: 12, marginTop: 20},
  impactBox: { width: '90%', borderRadius: 12, borderWidth: 1, borderColor: '#ccc', padding: 10, backgroundColor: '#f9f9f9', marginTop: 10 },
  darkImpactBox: { borderColor: '#444', backgroundColor: '#222' },
  impactHeader: { fontSize: 22, fontWeight: 'bold', color: config.PRIMARY_ACCENT, textAlign: 'center', marginBottom: 3, marginTop: 8 },
  boxDivider: { height: 1, backgroundColor: '#CCCCCC', width: '65%', alignSelf: 'center', marginVertical: 10 },
  impactItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  impactLabel: { fontSize: 16, color: '#333', fontWeight: '500' },
  darkText: { color: '#ddd' },
  impactValue: { fontSize: 16, fontWeight: 'bold', color: config.PRIMARY_ACCENT },
});
