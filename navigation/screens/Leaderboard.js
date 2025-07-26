import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as config from '../../config';

export default function LeaderboardTabs() {
  const [selected, setSelected] = useState('impact');

  return (
    <View style={{ flex: 1 }}>
      {/* Tab Bar */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tab} onPress={() => setSelected('impact')}>
          <Icon name="chart-line" size={18} color={selected === 'impact' ? config.PRIMARY_ACCENT : '#888'} />
          <Text style={[styles.tabText, selected === 'impact' && styles.selectedTabText]}>Impact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setSelected('individual')}>
          <Icon name="user" size={18} color={selected === 'individual' ? config.PRIMARY_ACCENT : '#888'} />
          <Text style={[styles.tabText, selected === 'individual' && styles.selectedTabText]}>Individual</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setSelected('community')}>
          <Icon name="users" size={18} color={selected === 'community' ? config.PRIMARY_ACCENT : '#888'} />
          <Text style={[styles.tabText, selected === 'community' && styles.selectedTabText]}>Community</Text>
        </TouchableOpacity>
      </View>

      {/* Conditional Views */}
      {selected === 'impact' && (
        <View style={styles.contentView}>
          <Text style={styles.contentText}>Impact Points Leaderboard</Text>
        </View>
      )}
      {selected === 'individual' && (
        <View style={styles.contentView}>
          <Text style={styles.contentText}>Individual Trash Cleaned Leaderboard</Text>
        </View>
      )}
      {selected === 'community' && (
        <View style={styles.contentView}>
          <Text style={styles.contentText}>Community Trash Cleaned Leaderboard</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#f2f2f2',
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  selectedTabText: {
    color: config.PRIMARY_ACCENT,
    fontWeight: 'bold',
  },
  contentView: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 16,
    color: '#444',
  },
});
