import React from 'react';
import {TextView} from '../shared/components';
import {gStyles} from '../shared/styles/gStyles';
import {View} from 'react-native';

const CommunityScreen = () => {
  return (
    <View style={[gStyles.flex1, gStyles.flexCenter]}>
      <TextView>CommunityScreen</TextView>
    </View>
  );
};

export default CommunityScreen;
