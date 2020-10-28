import React from 'react';

import { Header } from 'react-native-elements';

export default function PageHeader({ onLeftButtonPress }) {
  return (
    <Header
      placement="left"
      backgroundColor="#fff"
      leftComponent={{
        icon: 'menu',
        color: '#000',
        onPress: onLeftButtonPress,
      }}
      centerComponent={{ text: 'Fresh Mart', style: { color: '#000', fontFamily: 'Poppins_Medium' } }}
      rightComponent={{ icon: 'cart-outline', type: 'ionicon', color: '#000' }}
    />
  );
}
