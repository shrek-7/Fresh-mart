import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function ShopByCategoryHeader({ title, children }) {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#D2F6C5',
    paddingVertical: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins_Bold',
    color: '#000',
  },
});
