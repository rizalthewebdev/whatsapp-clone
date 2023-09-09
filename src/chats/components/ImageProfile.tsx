import React from 'react';
import {gStyles} from '../../shared/styles/gStyles';
import {Image, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome6';
import useColorTheme from '../../shared/hooks/useColorTheme';

type PropsType = {
  item: any;
  size?: number;
  iconSize?: number;
};

const ImageProfile = ({item, size = 44, iconSize = 18}: PropsType) => {
  const color = useColorTheme();

  if (!item?.image) {
    if (item?.category === 'personal') {
      return (
        <View
          style={[
            gStyles.roundedFull,
            gStyles.flexCenter,
            {
              width: size,
              height: size,
              backgroundColor: color.profileBackground,
            },
          ]}>
          <Ionicons
            name="person"
            size={iconSize}
            color={color.profileForeground}
          />
        </View>
      );
    } else {
      return (
        <View
          style={[
            gStyles.roundedFull,
            gStyles.flexCenter,
            {
              width: size,
              height: size,
              backgroundColor: color.profileBackground,
            },
          ]}>
          <FontAwesomeIcons
            name="user-group"
            size={iconSize}
            color={color.profileForeground}
          />
        </View>
      );
    }
  }

  return (
    <Image source={{uri: item?.image}} style={{width: size, height: size}} />
  );
};

export default ImageProfile;
