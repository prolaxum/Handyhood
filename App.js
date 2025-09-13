import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

// Import screens
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';
import ArtisanTabNavigator from './src/navigation/ArtisanTabNavigator';
import CustomerTabNavigator from './src/navigation/CustomerTabNavigator';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing authentication
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <WelcomeScreen />;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isAuthenticated ? (
            <>
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
            </>
          ) : (
            <>
              {userRole === 'artisan' ? (
                <Stack.Screen name="ArtisanMain" component={ArtisanTabNavigator} />
              ) : (
                <Stack.Screen name="CustomerMain" component={CustomerTabNavigator} />
              )}
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
