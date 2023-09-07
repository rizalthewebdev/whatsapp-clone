import React from 'react';
import {Text, View} from 'react-native';
import {gStyles} from '../styles/gStyles';

const HomeHeader = () => {
  return (
    <View style={[gStyles.flexRowCenterBetween]}>
      <Text>WhatsApp</Text>
    </View>
  );
};

export default HomeHeader;
