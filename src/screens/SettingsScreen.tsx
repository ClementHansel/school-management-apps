import React from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import { useAuth } from '@contexts/AuthContext';
import { useThemeMode } from '@contexts/ThemeContext';

export default function SettingsScreen() {
  const { logout } = useAuth();
  const { theme, toggleTheme } = useThemeMode();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>

      <View style={styles.logout}>
        <Button title="Logout" color="red" onPress={logout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
  },
  logout: {
    marginTop: 40,
  },
});
