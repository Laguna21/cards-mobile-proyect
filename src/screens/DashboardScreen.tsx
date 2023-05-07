import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const DashboardScreen = () => {
  return (
    <View style={styles().body}>
      <Text style={{color: 'red'}}>DashboardScreen</Text>
    </View>
  );
};
const styles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'crimson',
    },
  });
export default DashboardScreen;
