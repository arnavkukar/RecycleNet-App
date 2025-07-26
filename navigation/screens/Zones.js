import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Button} from 'react-native';
import * as config from '../../config';
import MapView, { Marker } from 'react-native-maps';

export default function Dashboard({ isDarkMode }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={[styles.wrapper, isDarkMode && styles.dark]}>
      <ScrollView bounces={false} style={[{ flex: 1 }, isDarkMode ? styles.dark : { backgroundColor: '#f2f2f2' }]}>
        <View style={styles.container}>
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
          <TouchableOpacity
            style={[styles.zonestatusButton, isDarkMode && styles.darkzonestatusButton]}
            activeOpacity={0.3}
            onPress={() => setModalVisible(true)}

          >
            <Text style={[styles.zonestatusText, isDarkMode && styles.darkzonestatusText]}>View Zone Status</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.addzoneButton, isDarkMode && styles.darkaddzoneButton]}
            activeOpacity={0.3}
            onPress={() => alert('You have clicked on "Add Zone"')}
          >
            <Text style={[styles.addzoneText, isDarkMode && styles.darkaddzoneText]}>Add Zone</Text>
          </TouchableOpacity>
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
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={[styles.modalOverlay]}>
              <View style={[styles.modalBox, isDarkMode && styles.darkmodalBox]}>
                <Text style={[styles.modalHeader, isDarkMode && styles.darkmodalHeader]}>Zone Status</Text>
                <Text style={{ fontSize: 14, color: '#333' }}>
                  You share this zone with 2 others. Zone area: 0.5 sq miles.
                </Text>
                <Button title="Close" onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff'},
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50 },
  dark: { backgroundColor: '#111' },
  text: { color: '#000', fontSize: 20 },
  darkText: { color: '#fff' },
  header: { color: config.PRIMARY_ACCENT, fontWeight: 'bold', fontSize: 40, alignSelf: 'center', marginTop: 1 },
  map: { width: '90%', height: 300, borderRadius: 12, marginTop: 20},
  impactBox: { width: '90%', borderRadius: 12, borderWidth: 1, borderColor: '#ccc', padding: 10, backgroundColor: '#f9f9f9', marginTop: 15 },
  darkImpactBox: { borderColor: '#444', backgroundColor: '#222' },
  impactHeader: { fontSize: 22, fontWeight: 'bold', color: config.PRIMARY_ACCENT, textAlign: 'center', marginBottom: 3, marginTop: 8 },
  boxDivider: { height: 1, backgroundColor: '#CCCCCC', width: '65%', alignSelf: 'center', marginVertical: 10 },
  impactItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  impactLabel: { fontSize: 16, color: '#333', fontWeight: '500' },
  darkText: { color: '#ddd' },
  impactValue: { fontSize: 16, fontWeight: 'bold', color: config.PRIMARY_ACCENT },
  zonestatusButton: { backgroundColor: '#10B981', paddingVertical: 16, paddingHorizontal: 25, borderRadius: 8, marginTop: 14, width: '90%', alignItem: 'center', justifyContent: 'flex-start', borderWidth: 1, borderColor: '#ccc'},
  darkzonestatusButton: { backgroundColor: '#222', borderColor: '#444'},
  zonestatusText: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: '27%'},
  darkzonestatusText: { color: config.PRIMARY_ACCENT},
  addzoneButton: { backgroundColor: '#10B981', paddingVertical: 16, paddingHorizontal: 25, borderRadius: 8, marginTop: 14, width: '90%', alignItem: 'center', justifyContent: 'flex-start', borderWidth: 1, borderColor: '#ccc'},
  darkaddzoneButton: { backgroundColor: '#222', borderColor: '#444'},
  addzoneText: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: '38%'},
  darkaddzoneText: { color: config.PRIMARY_ACCENT},
  modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000088'},
  modalBox: { backgroundColor: 'white', padding: 20, borderRadius: 10, minWidth: '20%', alignItems: 'center', height: 400},
  darkmodalBox: { backgroundColor: '#222'},
  modalHeader: {color: '#000', fontWeight: 'bold', fontSize: 30},
  darkmodalHeader: { color: '#fff'},
});
