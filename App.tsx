import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from '@contexts/AuthContext';
import { ThemeProvider, useThemeMode } from '@contexts/ThemeContext';
import RootNavigator from '@navigation/RootNavigator';

function AppContainer() {
  const { theme } = useThemeMode();

  return (
    <>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <RootNavigator />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContainer />
      </AuthProvider>
    </ThemeProvider>
  );
}
