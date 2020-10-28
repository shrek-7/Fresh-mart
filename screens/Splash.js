import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Text } from 'react-native';
import splashImage from '../assets/splash.png';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1100,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.splashTitle}>Fresh Mart</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          resizeMode={'cover'}
          style={styles.tinyLogo}
          source={splashImage}
        />
      </View>
      <FadeInView style={styles.textContainer}>
        <Text style={styles.splashText}>
          Fresh fruits and vegetables delivered at your doorstep.
        </Text>
      </FadeInView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  imageContainer: {
    height: 150,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 90,
  },
  splashText: {
    textAlign: 'center',
    width: '70%',
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins_Light',
  },
  splashTitle: {
    textAlign: 'center',
    fontSize: 32,
    color: '#057625',
    fontFamily: 'Poppins_Bold',
  },
  titleContainer: {
    position: 'absolute',
    top: 120,
  },
});

export default SplashScreen;
