import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const username = 'John Doe'; // later replace with actual login

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
