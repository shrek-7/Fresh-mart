import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Divider } from 'react-native-elements';

function UserInfo({ user }) {
  return (
    <View style={styles.Container}>
      <Avatar
        containerStyle={styles.avatar}
        rounded
        source={{
          uri: user.photo,
        }}
      />
      <Text style={styles.username}>{user.name}</Text>
      <Divider style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 20,
    padding: 10,
  },
  divider: {
    backgroundColor: '#057625',
    marginVertical: 10,
  },
  avatar: {
    marginBottom: 10,
  },
  username: {
    fontFamily: 'Poppins_Bold',
  }
});

export default UserInfo;
