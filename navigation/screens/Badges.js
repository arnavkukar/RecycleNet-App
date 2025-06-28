import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Button } from 'react-native';

export default function Dashboard({ isDarkMode }) {
  const badgeSlots = [
    "Fresh Start", "First Cleanup", "Zone Claimer", "Profile Ready",
    "Impact Ready", "Friendly Footprint", "Clean Streak", "Explorer"
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState(null);

  const openModal = (index) => {
    setSelectedBadge(badgeSlots[index]);
    setModalVisible(true);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.dark]}>
      <Text style={styles.title}>Your Badges</Text>
      <Text style={styles.description}>Earn badges as you clean zones.</Text>
      <Text style={styles.progressText}>6 / 24 badges unlocked</Text>
      <Text style={[styles.lightHeader, isDarkMode && styles.darkHeader]}>Starter Badges</Text>
      <View style={styles.divider} />

      <View style={styles.badgeGrid}>
        {badgeSlots.map((badgeName, index) => (
          <TouchableOpacity key={index} style={styles.badgeCircle} onPress={() => openModal(index)}>
            <Text style={styles.badgeText}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>{selectedBadge}</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 30 },
  dark: { backgroundColor: '#111' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#10B981' },
  description: { color: '#888', fontSize: 12, marginTop: 20 },
  progressText: { color: '#10B981', marginTop: 20, fontSize: 20 },
  lightHeader: { color: '#355E3B', fontWeight: 'bold', fontSize: 30, marginTop: 30, alignSelf: 'flex-start', paddingLeft: 20 },
  darkHeader: { color: '#D8EAD2', fontWeight: 'bold', fontSize: 30, marginTop: 30, alignSelf: 'flex-start', paddingLeft: 20 },
  divider: { height: 1, backgroundColor: '#CCCCCC', width: '100%', alignSelf: 'center', marginVertical: 10 },
  badgeGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 20, rowGap: 20, marginTop: 10, paddingHorizontal: 20 },
  badgeCircle: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#CCC', justifyContent: 'center', alignItems: 'center' },
  badgeText: { fontSize: 18, fontWeight: 'bold', color: '#444' },
  modalOverlay: { flex: 1, backgroundColor: '#00000099', justifyContent: 'center', alignItems: 'center' },
  modalBox: { backgroundColor: '#fff', padding: 20, borderRadius: 10, minWidth: 250, alignItems: 'center' },
  modalTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 }
});
