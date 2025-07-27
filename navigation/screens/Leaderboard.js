import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as config from '../../config';

export default function Leaderboard({ isDarkMode }) {
  const [selected, setSelected] = useState('impact');

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      {/* Tab Bar */}
      <View style={[styles.tabsContainer, isDarkMode && styles.darktabsContainer]}>
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
      <View style={styles.divider} />

      {/* Conditional Views */}
      {selected === 'impact' && (
        <View style={styles.contentView}>
          <Text style={[styles.impactHeader]}>Impact  Leaderboard</Text>
        </View>
      )}
      {selected === 'individual' && (
        <View style={styles.contentView}>
          <Text style={styles.individualHeader}>Individual Leaderboard</Text>
        </View>
      )}
      {selected === 'community' && (
        <View style={styles.contentView}>
          <Text style={styles.communityHeader}>Community Leaderboard</Text>
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
  darktabsContainer: {
    backgroundColor: '#111',
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
  impactHeader: { color: config.PRIMARY_ACCENT, fontWeight: 'bold', fontSize: 36, alignSelf: 'center', marginTop: 1 },
  individualHeader: { color: config.PRIMARY_ACCENT, fontWeight: 'bold', fontSize: 33, alignSelf: 'center', marginTop: 1},
  communityHeader: { color: config.PRIMARY_ACCENT, fontWeight: 'bold', fontSize: 30, alignSelf: 'center', marginTop: 1 },
  container: { backgroundColor: '#f2f2f2', flex: 1},
  darkContainer: { backgroundColor: '#111'},
  divider: { height: 1, backgroundColor: '#CCCCCC', width: '85%', alignSelf: 'center', marginVertical: 10 },
});
