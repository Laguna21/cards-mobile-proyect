import React from 'react';
import {SafeAreaView, Text, View, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LaunchScreen from './src/screens/LaunchScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Launch"
          component={LaunchScreen}
          options={{
            headerShown: false, // ocultar el encabezado de todas las pantallas en el Drawer
          }}
        />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
