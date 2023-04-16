import {Text, View, StyleSheet, Animated, Image} from 'react-native';
import React, {useEffect} from 'react';

const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedText = Animated.createAnimatedComponent(Text);

const LaunchScreen = ({navigation}) => {
  const [fadeIn] = React.useState(new Animated.Value(0));
  const [fadeInLower] = React.useState(new Animated.Value(0));
  const [isAnimated, setIsAnimated] = React.useState(false);
  useEffect(() => {
    if (!isAnimated) {
      Animated.timing(fadeIn, {
        duration: 3000,
        toValue: 1,
        useNativeDriver: true,
      }).start();
      Animated.timing(fadeInLower, {
        duration: 5000,
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
    setIsAnimated(true);
  }, []);
  useEffect(() => {
    console.log('Cambio la animacion', isAnimated);
    if (isAnimated) {
      setTimeout(() => {
        navigation.navigate('Loading', {Animated: 'fadeIn'});
      }, 5000);
    }
  }, [isAnimated]);
  return (
    <AnimatedView style={[styles().body, {opacity: fadeIn}]}>
      <AnimatedImage
        style={[styles().image, styles(fadeInLower).opacity]}
        source={require('../assets/img/laguna.jpeg')}
      />
      <AnimatedText style={[styles().text, {opacity: fadeIn}]}>
        Laguna YGO card finder
      </AnimatedText>
    </AnimatedView>
  );
};
const styles = (fadeIn = 0) =>
  StyleSheet.create({
    body: {
      backgroundColor: 'black',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    text: {
      color: 'white',
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: 'bold',
      position: 'absolute',
      bottom: '30%',
    },
    opacity: {
      opacity: fadeIn,
    },
    image: {
      width: '70%',
      height: '30%',
      overflow: 'hidden',
      borderRadius: 80,
    },
  });
export default LaunchScreen;
