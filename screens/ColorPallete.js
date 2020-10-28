import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import ColorBox from '../components/ColorBox';

export default function ColorPallete({ route }) {
  const { paletteName, colors } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox color={item.hexCode} text={item.colorName} />
      )}
      ListHeaderComponent={<Text>{paletteName}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000',
  },
  safeArea: {
    flex: 1,
  },
});
