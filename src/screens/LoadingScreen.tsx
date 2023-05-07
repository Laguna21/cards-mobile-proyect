import {StyleSheet, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
export default function LoadingScreen() {
  return (
    <View style={[styles().body]}>
      <LottieView
        source={require('../assets/animations/retro-game-loading-animation.json')}
        autoPlay
        loop
      />
    </View>
  );
}
const styles = () =>
  StyleSheet.create({
    body: {
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      height: '100%',
    },
  });
