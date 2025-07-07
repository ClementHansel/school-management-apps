import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import ProfileScreen from '@screens/ProfileScreen';
import SettingsScreen from '@screens/SettingsScreen';

import { useAuth } from '@contexts/AuthContext';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const { user } = useAuth();

  if (!user) return <Text>Loading...</Text>;

  const { role } = user;

  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      {/* Common Tab */}
      <Tab.Screen name="Home" component={HomeScreen} />

      {/* Role-specific Tabs */}
      {role === 'admin' && (
        <Tab.Screen name="Tasks" component={DummyScreen('Tasks')} />
      )}
      {role === 'teacher' && (
        <Tab.Screen name="Attendance" component={DummyScreen('Attendance')} />
      )}
      {role === 'employee' && (
        <Tab.Screen name="Payroll" component={DummyScreen('Payroll')} />
      )}
      {role === 'parent' && (
        <Tab.Screen name="Calendar" component={DummyScreen('Calendar')} />
      )}

      {/* Common Tabs */}
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Helper to generate temporary screens
const DummyScreen = (label: string) => () =>
  (
    <Text
      style={{ flex: 1, textAlign: 'center', marginTop: 100, fontSize: 20 }}
    >
      {label} Screen
    </Text>
  );
