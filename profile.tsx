import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Sarah Johnson</Text>
        <Text style={styles.bio}>Passionate runner | Marathon enthusiast</Text>
        
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>42</Text>
          <Text style={styles.statLabel}>Total Runs</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>286.5</Text>
          <Text style={styles.statLabel}>Total KM</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>24</Text>
          <Text style={styles.statLabel}>Achievements</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Bests</Text>
        <View style={styles.personalBest}>
          <View style={styles.pbIcon}>
            <Ionicons name="trophy" size={24} color="#FFD700" />
          </View>
          <View style={styles.pbInfo}>
            <Text style={styles.pbTitle}>5K Personal Best</Text>
            <Text style={styles.pbValue}>22:45</Text>
          </View>
        </View>
        <View style={styles.personalBest}>
          <View style={styles.pbIcon}>
            <Ionicons name="trophy" size={24} color="#C0C0C0" />
          </View>
          <View style={styles.pbInfo}>
            <Text style={styles.pbTitle}>10K Personal Best</Text>
            <Text style={styles.pbValue}>48:30</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
          <Text style={styles.settingText}>Notifications</Text>
          <Ionicons name="chevron-forward" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="globe-outline" size={24} color="#fff" />
          <Text style={styles.settingText}>Units</Text>
          <Ionicons name="chevron-forward" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="shield-outline" size={24} color="#fff" />
          <Text style={styles.settingText}>Privacy</Text>
          <Ionicons name="chevron-forward" size={24} color="#888" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: '#888',
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#2c2d31',
    marginHorizontal: 16,
    borderRadius: 16,
  },
  statCard: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  personalBest: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2d31',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  pbIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#3f4045',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  pbInfo: {
    flex: 1,
  },
  pbTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  pbValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2d31',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 16,
  },
});