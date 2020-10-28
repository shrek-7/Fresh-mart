import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import vegBanner from '../assets/veg_banner.jpg';

export default function Banner() {
  return (
    <View style={styles.bannerContainer}>
      <Image
        resizeMode={'cover'}
        source={vegBanner}
        style={styles.bannerImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Fruits &</Text>
        <Text style={styles.textTitle}>vegetables</Text>
        <Text style={styles.textDescription}>served fresh from our farm</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    position: 'relative',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 5,
  },
  bannerImage: {
    position: 'relative',
    zIndex: 1,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 4,
    backgroundColor: '#fff',
    padding: 15,
  },
  textTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_Regular',
  },
  textDescription: {
    fontSize: 12,
    marginTop: 5,
    color: 'rgba(0, 0, 0, 0.71)',
    fontFamily: 'Poppins_Light',
  },
});
