import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const totalTrash = 700

export default function Dashboard({ isDarkMode }) {
  return (
    <View style={[styles.container, isDarkMode && styles.dark]}>
      
      <Text style={styles.head}>Welcome Arnav!</Text>
      <Text style={styles.description}>Track your cleanups and watch your impact grow.</Text>
      
      <View style={[styles.totalCard, isDarkMode && styles.darktotalCard]}>
        <Text style={[styles.totalTrashHeader, isDarkMode && styles.darktotalTrashHeader]}>🗑️Total Trash Cleaned:</Text>
        <Text style={styles.totalTrashValue}>{totalTrash} lbs</Text>
      </View>

      <View style={[styles.impactBox, isDarkMode && styles.darkImpactBox]}>
        <Text style={styles.impactHeader}>This Week's Impact</Text>
        <View style={styles.boxDivider} />

        <View style={styles.impactItem}>
          <Text style={[styles.impactLabel, isDarkMode && styles.darkText]}>🧹 Cleanups Completed</Text>
          <Text style={styles.impactValue}>3</Text>
        </View>
        <View style={styles.impactItem}>
          <Text style={[styles.impactLabel, isDarkMode && styles.darkText]}>🗑️ Trash Collected</Text>
          <Text style={styles.impactValue}>5.2 lbs</Text>
        </View>
        <View style={[styles.impactItem, { borderBottomWidth: 0 }]}>
          <Text style={[styles.impactLabel, isDarkMode && styles.darkText]}>📍 Zones Monitored</Text>
          <Text style={styles.impactValue}>2</Text>
        </View>

      </View>
      <LineChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
          datasets: [
            {
              data: [1.2, 0.8, 1.5, 0.0, 2.3]
            }
          ]
        }}
        width={screenWidth * 0.95} // width of the chart
        height={220}
        yAxisSuffix=" lbs"
        chartConfig={{
          backgroundColor: "#f0fdf4",
          backgroundGradientFrom: "#f0fdf4",
          backgroundGradientTo: "#f0fdf4",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(16, 185, 129, ${opacity})`, // green line
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 16 },
          propsForDots: { r: "5", strokeWidth: "2", stroke: "#10B981" }
        }}
        bezier
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 30 },
  dark: { backgroundColor: '#111' },
  head: { color: '#10B981', fontSize: 40, fontWeight: "bold" },
  description: { color: '#888', fontSize: 12, marginTop: 10 },
  impactBox: { width: '90%', borderRadius: 12, borderWidth: 1, borderColor: '#ccc', padding: 10, backgroundColor: '#f9f9f9', marginTop: 40 },
  darkImpactBox: { borderColor: '#444', backgroundColor: '#222' },
  impactHeader: { fontSize: 22, fontWeight: 'bold', color: '#355E3B', textAlign: 'center', marginBottom: 3, marginTop: 8 },
  boxDivider: { height: 1, backgroundColor: '#CCCCCC', width: '65%', alignSelf: 'center', marginVertical: 10 },
  impactItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  impactLabel: { fontSize: 16, color: '#333', fontWeight: '500' },
  darkText: { color: '#ddd' },
  impactValue: { fontSize: 16, fontWeight: 'bold', color: '#10B981' },
  totalCard: { width: '90%', borderRadius: 12, borderWidth: 1, borderColor: '#ccc', padding: 10, backgroundColor: '#f9f9f9', marginTop: 40, flexDirection: 'row', justifyContent: 'space-between'},
  darktotalCard: { borderColor: '#444', backgroundColor: '#222' },
  totalTrashHeader: { fontSize: 16, color: '#333', fontWeight: '500' },
  totalTrashValue: { fontSize: 16, fontWeight: 'bold', color: '#10B981' },
});
