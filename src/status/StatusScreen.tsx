/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextView} from '../shared/components';
import {TouchableOpacity, View} from 'react-native';
import {gStyles} from '../shared/styles/gStyles';
import useColorTheme from '../shared/hooks/useColorTheme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FloatingButton} from '../shared/components';

const StatusScreen = () => {
  const color = useColorTheme();

  return (
    <>
      <View style={[gStyles.flex1, gStyles.flexCenter]}>
        <TextView>StatusScreen</TextView>
      </View>
      <FloatingButton>
        <TouchableOpacity
          style={[
            gStyles.shadow,
            {
              backgroundColor: color.backgroundWeaker,
              borderRadius: 12,
              padding: 10,
            },
          ]}>
          <MaterialCommunityIcons
            name="pencil"
            size={20}
            color={color.iconActive}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            gStyles.p4,
            {backgroundColor: color.secondary, borderRadius: 16},
          ]}>
          <FontAwesome name="camera" size={20} color={color.background} />
        </TouchableOpacity>
      </FloatingButton>
    </>
  );
};

export default StatusScreen;
