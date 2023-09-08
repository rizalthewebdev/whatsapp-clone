import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {gStyles} from '../styles/gStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import useColorTheme from '../hooks/useColorTheme';

const BaseView = ({children}: PropsWithChildren) => {
  const color = useColorTheme();

  return (
    <View style={[gStyles.flex1, {backgroundColor: color.background}]}>
      <SafeAreaView style={gStyles.flex1}>{children}</SafeAreaView>
    </View>
  );
};

export default BaseView;
