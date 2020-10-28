import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

import { Divider } from 'react-native-elements';

export default function ItemCard({ title, image }) {
  return (
    <View style={styles.ShadowContainer}>
      <View style={styles.Container}>
        <View style={styles.ImageContainer}>
          <Image style={styles.Image} resizeMode={'cover'} source={image} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ShadowContainer: {
    borderRadius: 5,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  ImageContainer: {
    height: 70,
    width: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  Image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins_Regular',
  },
});
