/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextView} from '../shared/components';
import {gStyles} from '../shared/styles/gStyles';
import {TouchableOpacity, View} from 'react-native';
import FloatingButton from '../shared/components/FloatingButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useColorTheme from '../shared/hooks/useColorTheme';

const CallsScreen = () => {
  const color = useColorTheme();

  return (
    <>
      <View style={[gStyles.flex1, gStyles.flexCenter]}>
        <TextView>CallsScreen</TextView>
      </View>
      <FloatingButton>
        <TouchableOpacity
          style={[
            gStyles.p4,
            {backgroundColor: color.secondary, borderRadius: 16},
          ]}>
          <MaterialIcons name="add-call" size={20} color={color.background} />
        </TouchableOpacity>
      </FloatingButton>
    </>
  );
};

export default CallsScreen;
