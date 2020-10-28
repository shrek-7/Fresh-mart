import React from 'react';
import { Text, StyleSheet, View, SectionList, SafeAreaView } from 'react-native';

import ItemCard from './ItemCard';
import ShopByCategoryHeader from './ShopByCategoryHeader';

import fruits from '../assets/fruits.jpg';
import dairy from '../assets/dairy.png';
import Vegetables from '../assets/vegetables.jpg';

const DATA = [
  {
    title: 'Shop by Category',
    data: [
      {
        title: 'Fruits',
        image: fruits,
      },
      {
        title: 'Vegetables',
        image: Vegetables,
      },
      {
        title: 'Breakfast & Dairy',
        image: dairy,
      },
    ],
  },
  {
    title: 'Shop by Combo',
    data: [
      {
        title: 'Fruits',
        image: fruits,
      },
      {
        title: 'Vegetables',
        image: Vegetables,
      },
      {
        title: 'Breakfast & Dairy',
        image: dairy,
      },
    ],
  },
];

const Item = ({ title, image }) => (
  <View style={styles.item}>
    <ItemCard title={title} image={image} />
  </View>
);

export default function ShopBySection() {
  return (
    <SafeAreaView style={styles.Container}>
      {/* {renderCategories()} */}
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Item title={item.title} image={item.image} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ShopByCategoryHeader title={title} style={styles.header} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
  },
  ItemContainer: {
    width: '50%',
  },
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
