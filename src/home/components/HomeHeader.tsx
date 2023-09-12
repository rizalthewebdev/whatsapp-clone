/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {gStyles} from '../../shared/styles/gStyles';
import useColorTheme from '../../shared/hooks/useColorTheme';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {useGlobalState} from '../../shared/providers/StateProvider';

const HomeHeader = () => {
  const color = useColorTheme();
  const {tabNavigatorIndex} = useGlobalState();

  return (
    <View
      style={[
        gStyles.flexRowCenterBetween,
        gStyles.p4,
        {backgroundColor: color?.primary},
      ]}>
      <Text
        style={{
          color: 'white',
          fontSize: 16,
          fontWeight: '600',
          letterSpacing: 0.5,
        }}>
        WhatsApp
      </Text>
      <View style={[gStyles.row, gStyles.flexCenter, {gap: 24}]}>
        <FeatherIcons name="camera" size={20} color="white" />
        {tabNavigatorIndex !== 0 && (
          <FeatherIcons name="search" size={20} color="white" />
        )}
        <FeatherIcons name="more-vertical" size={24} color="white" />
      </View>
    </View>
  );
};

export default HomeHeader;
