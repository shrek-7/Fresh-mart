import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import PageHeader from '../components/Header';
import Banner from '../components/Banner';
// import ShopByWrapper from '../components/ShopByWrapper';
import ShopBySection from '../components/ShopBySection';
import { SearchBar, Divider } from 'react-native-elements';

export default function Home({ navigation }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchOnChange = (search) => {
    setSearchText(search);
  };

  return (
    <View style={styles.homeContainer}>
      <PageHeader onLeftButtonPress={() => navigation.toggleDrawer()} />
      <Divider style={styles.divider} />
      <SearchBar
        round
        containerStyle={styles.searchContainer}
        inputStyle={styles.searchInputStyle}
        inputContainerStyle={styles.searchInputContainerStyle}
        platform="default"
        placeholder="Search"
        placeholderTextColor="rgba(0, 0, 0, 0.39)"
        onChangeText={handleSearchOnChange}
        value={searchText}
      />
      <ScrollView style={styles.ScrollViewStyle}>
        <Banner />
        <ShopBySection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderTopColor: '#fff',
    borderBottomColor: '#fff',
  },
  searchInputContainerStyle: {
    backgroundColor: '#fff',
  },
  searchInputStyle: {
    fontSize: 16,
  },
  ScrollViewStyle: {
    flex: 1,
  },
  divider: {
    backgroundColor: '#057625',
  },
});
