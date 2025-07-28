import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Button, ScrollView} from 'react-native';
import * as config from '../../config';

export default function Badges({ isDarkMode }) {
  const starterBadges = [
    "Fresh Start", "First Cleanup", "Zone Claimer", "Profile Ready",
    "Impact Ready", "Friendly Footprint", "Clean Streak", "Explorer"
  ];

  const starterDescriptions = [
    "Welcome aboard! You created your account and joined the mission.",
    "Great job! You logged your very first cleanup activity.",
    "You’ve adopted your first cleanup zone — taking responsibility locally.",
    "Your profile is complete and ready to show your impact.",
    "You earned your first impact point — every bit counts!",
    "You invited a friend or shared the app to grow the community.",
    "You cleaned for two days in a row — keep the momentum going!",
    "You explored three different zones on the map — discovering your area."
  ];

  const cleanupBadges = [
    "Quick Sweep",
    "Zone Hero",
    "Weekly Warrior",
    "Trash Titan",
    "Neighborhood Champ",
    "Litter Sniper",
    "Eco Streak",
    "Ultimate Recycler"
  ];

  const cleanupDescriptions = [
    "Completed 5 cleanups in a week. Fast and consistent!",
    "Cleaned the same zone 10 times — true dedication.",
    "Cleaned every week for a month. Legendary!",
    "Cleaned up over 100 lbs of trash — massive impact!",
    "Cleaned 3 or more neighboring zones. Local hero!",
    "Picked up 10+ pounds of litter in one cleanup. Sharp eyes!",
    "Cleaned 7 days in a row. Nature’s MVP!",
    "Sorted recyclables in 5 cleanups. Saving the planet one bottle at a time."
  ];

  const badgeSlots = [
    "Fresh Start", "First Cleanup", "Zone Claimer", "Profile Ready",
    "Impact Ready", "Friendly Footprint", "Clean Streak", "Explorer",
    "Tenacious Tracker", "Quarter Crusher", "Trash Terminator", "100 Club",
    "One-Year Streak", "1,000 Pounds Later", "Across the Map", "Top 10 Leader"
  ];

  const badgeDescriptions = [
    "Welcome aboard! You created your account and joined the mission.",
    "Great job! You logged your very first cleanup activity.",
    "You’ve adopted your first cleanup zone — taking responsibility locally.",
    "Your profile is complete and ready to show your impact.",
    "You earned your first impact point — every bit counts!",
    "You invited a friend or shared the app to grow the community.",
    "You cleaned for two days in a row — keep the momentum going!",
    "You explored three different zones on the map — discovering your area.",
    "You’ve logged 10 cleanups!",
    "25 cleanups completed — serious commitment!",
    "50 cleanups and counting. You're unstoppable!",
    "100 cleanups — a major impact milestone!",
    "You’ve been cleaning for a whole year — amazing consistency!",
    "1,000 pounds of trash removed — real environmental hero stuff.",
    "You’ve cleaned in 5 or more different zones!",
    "You made it to the top 10 on the leaderboard. You're elite!"
  ];




  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [selectedBadgeDescription, setSelectedBadgeDescription] = useState('');

  const openModal = (badgeName, badgeDescription) => {
    setSelectedBadge(badgeName);
    setSelectedBadgeDescription(badgeDescription);
    setModalVisible(true);
  };

  const renderBadgeSection = (title, badges, descriptions) => (
    <View style={{ width: '100%' }}>
      <Text style={[styles.lightHeader, isDarkMode && styles.darkHeader]}>{title}</Text>
      <View style={styles.divider} />
      <View style={styles.badgeGrid}>
        {badges.map((badgeName, index) => (
          <TouchableOpacity
            key={index}
            style={styles.badgeCircle}
            onPress={() => openModal(badgeName, descriptions[index])}
          >
            <Text style={styles.badgeText}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView bounces={false} contentContainerStyle={[styles.container, isDarkMode && styles.dark]}>
      <Text style={styles.title}>Your Badges</Text>
      <Text style={styles.description}>Earn badges as you clean zones.</Text>
      <Text style={styles.progressText}>10 / 24 badges unlocked</Text>

      {/* Starter Badges */}
      {renderBadgeSection("Starter Badges", starterBadges, starterDescriptions)}

      {/* Cleanup Badges */}
      {renderBadgeSection("Cleanup Badges", cleanupBadges, cleanupDescriptions)}

      {/* Milestone Badges */}
      {renderBadgeSection("Milestone Badges", cleanupBadges, cleanupDescriptions)}

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>{selectedBadge}</Text>
            <Text style={styles.modalDescription}>{selectedBadgeDescription}</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'flex-start', alignItems: 'center', paddingTop: 30, paddingBottom: 50},
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
  modalTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  modalDescription: { fontSize: 16, color: '#555', textAlign: 'center', marginBottom: 15 }
});
