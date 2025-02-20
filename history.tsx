import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockRuns = [
  {
    id: 1,
    date: '2024-02-20',
    distance: 5.2,
    duration: '00:32:15',
    pace: '6:12',
  },
  {
    id: 2,
    date: '2024-02-18',
    distance: 3.8,
    duration: '00:24:30',
    pace: '6:27',
  },
  {
    id: 3,
    date: '2024-02-16',
    distance: 6.5,
    duration: '00:41:45',
    pace: '6:25',
  },
];

export default function HistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Running History</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      {mockRuns.map(run => (
        <TouchableOpacity key={run.id} style={styles.runCard}>
          <View style={styles.runHeader}>
            <Text style={styles.date}>{run.date}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Completed</Text>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Ionicons name="speedometer-outline" size={24} color="#4CAF50" />
              <Text style={styles.statValue}>{run.distance} km</Text>
              <Text style={styles.statLabel}>Distance</Text>
            </View>

            <View style={styles.stat}>
              <Ionicons name="time-outline" size={24} color="#4CAF50" />
              <Text style={styles.statValue}>{run.duration}</Text>
              <Text style={styles.statLabel}>Duration</Text>
            </View>

            <View style={styles.stat}>
              <Ionicons name="trending-up-outline" size={24} color="#4CAF50" />
              <Text style={styles.statValue}>{run.pace}</Text>
              <Text style={styles.statLabel}>Pace (min/km)</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsText}>View Details</Text>
            <Ionicons name="chevron-forward" size={20} color="#4CAF50" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  filterButton: {
    padding: 8,
  },
  runCard: {
    backgroundColor: '#2c2d31',
    margin: 16,
    marginTop: 8,
    borderRadius: 16,
    padding: 16,
  },
  runHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  date: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  badge: {
    backgroundColor: '#4CAF5033',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#4CAF50',
    fontSize: 12,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  statLabel: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#3f4045',
  },
  detailsText: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: '500',
    marginRight: 4,
  },
});