/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {gStyles} from '../../shared/styles/gStyles';
import {Image, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome6';
import useColorTheme from '../../shared/hooks/useColorTheme';

const ImageProfile = ({item}: {item: any}) => {
  const color = useColorTheme();

  if (!item?.image) {
    if (item?.category === 'personal') {
      return (
        <View
          style={[
            gStyles.roundedFull,
            gStyles.flexCenter,

            {width: 48, height: 48, backgroundColor: color.profileBackground},
          ]}>
          <Ionicons name="person" size={20} color={color.profileForeground} />
        </View>
      );
    } else {
      return (
        <View
          style={[
            gStyles.roundedFull,
            gStyles.flexCenter,

            {width: 48, height: 48, backgroundColor: color.profileBackground},
          ]}>
          <FontAwesomeIcons
            name="user-group"
            size={20}
            color={color.profileForeground}
          />
        </View>
      );
    }
  }

  return <Image source={{uri: item?.image}} style={{width: 44, height: 44}} />;
};

export default ImageProfile;
