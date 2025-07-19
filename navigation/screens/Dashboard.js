import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import * as config from '../../config';


const screenWidth = Dimensions.get("window").width;
const totalTrash = 700

export default function Dashboard({ isDarkMode }) {
  return (
    <View style={[styles.container, isDarkMode && styles.dark]}>
      
      <Text style={styles.head}>Welcome {config.USER_NAME}!</Text>
      <Text style={styles.description}>Track your cleanups and watch your impact grow.</Text>
      
      <View style={[styles.totalCard, isDarkMode && styles.darktotalCard]}>
        <View>
          <Text style={[styles.totalTrashHeader, isDarkMode && styles.darktotalTrashHeader]}>
            🗑️ Total Trash Cleaned:  <Text style={[styles.totalTrashValue, isDarkMode && styles.darktotalTrashValue]}>{config.TOTAL_TRASH} lbs</Text>
          </Text>
          <Text style={styles.todayTrashText}>Today: {config.DAY_TRASH} lbs</Text>
        </View>

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
      <View style={[styles.chartContainer, isDarkMode && styles.darkChartContainer]}>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
            datasets: [{ data: [1.2, 0.8, 1.5, 0.0, 2.3] }]
          }}
          width={screenWidth * 0.87} // slightly reduced to match padding
          height={220}
          yAxisSuffix=" lbs"
          fromZero
          chartConfig={{
            backgroundColor: isDarkMode ? '#222' : "#f9f9f9",
            backgroundGradientFrom: isDarkMode ? '#222' : "#f9f9f9",
            backgroundGradientTo: isDarkMode ? '#222' : "#f9f9f9",
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(16, 185, 129, ${opacity})`,
            labelColor: (opacity = 1) => isDarkMode ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
            style: { borderRadius: 12 },
            propsForDots: { r: "5", strokeWidth: "2", stroke: config.PRIMARY_ACCENT }
          }}
          bezier
          style={{ alignSelf: 'center', borderRadius: 12, marginVertical: 0 }}
        />
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 30 },
  dark: { backgroundColor: '#111' },
  head: { color: config.PRIMARY_ACCENT, fontSize: 40, fontWeight: "bold" },
  description: { color: '#888', fontSize: 12, marginTop: 10 },
  impactBox: { width: '90%', borderRadius: 12, borderWidth: 1, borderColor: '#ccc', padding: 10, backgroundColor: '#f9f9f9', marginTop: 10 },
  darkImpactBox: { borderColor: '#444', backgroundColor: '#222' },
  impactHeader: { fontSize: 22, fontWeight: 'bold', color: config.PRIMARY_ACCENT, textAlign: 'center', marginBottom: 3, marginTop: 8 },
  boxDivider: { height: 1, backgroundColor: '#CCCCCC', width: '65%', alignSelf: 'center', marginVertical: 10 },
  impactItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  impactLabel: { fontSize: 16, color: '#333', fontWeight: '500' },
  darkText: { color: '#ddd' },
  impactValue: { fontSize: 16, fontWeight: 'bold', color: config.PRIMARY_ACCENT },
  totalCard: { width: '90%', height: 90, borderRadius: 12, borderWidth: 1, borderColor: '#ccc', padding: 30, backgroundColor: '#f9f9f9', marginTop: 30, flexDirection: 'row', justifyContent: 'space-between'},
  darktotalCard: { borderColor: '#444', backgroundColor: '#222' },
  totalTrashHeader: { fontSize: 20, color: '#333', fontWeight: '500' },
  totalTrashValue: { fontSize: 20, fontWeight: 'bold', color: config.PRIMARY_ACCENT },
  todayTrashText: { fontSize: 16, color: '#888', marginTop: 7, marginLeft: 100},
  darktotalTrashHeader: { fontSize: 21, color: '#fff', marginTop: -7, marginLeft: -10},
  darktotalTrashValue: { fontSize: 20, fontWeight: 'bold', color: config.PRIMARY_ACCENT},
  chartContainer: { width: '90%', borderRadius: 12, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#f9f9f9', padding: 5, marginTop: 11 },
  darkChartContainer: { borderColor: '#444', backgroundColor: '#222' },

});
