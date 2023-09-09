/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {gStyles} from '../../shared/styles/gStyles';
import FeatherIcons from 'react-native-vector-icons/Feather';
import useColorTheme from '../../shared/hooks/useColorTheme';
import {useNavigation} from '@react-navigation/native';

const HeaderDetailInformation = () => {
  const color = useColorTheme();
  const {goBack} = useNavigation();

  return (
    <View
      style={[
        gStyles.flexRowCenterBetween,
        gStyles.py4,
        {paddingHorizontal: 12, backgroundColor: 'transparent'},
      ]}>
      <View>
        <TouchableOpacity onPress={goBack}>
          <FeatherIcons name="arrow-left" size={20} color={color.foreground} />
        </TouchableOpacity>
      </View>

      <FeatherIcons name="more-vertical" size={20} color={color.foreground} />
    </View>
  );
};

export default HeaderDetailInformation;
