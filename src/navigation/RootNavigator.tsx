import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import LoginScreen from '@screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';
import { useAuth } from '@contexts/AuthContext';
import { useThemeMode } from '@contexts/ThemeContext';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user } = useAuth();
  const { theme } = useThemeMode();

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="MainApp" component={MainTabNavigator} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
