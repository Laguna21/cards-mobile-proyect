/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import LaunchScreen from './src/screens/LaunchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingScreen from './src/screens/LoadingScreen';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : 'lightblue',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'fade', headerShown: false}}>
        <Stack.Screen
          name="Launch"
          component={LaunchScreen}
          options={{animation: 'fade'}}
        />
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{animation: 'fade', animationDuration: 1000}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
