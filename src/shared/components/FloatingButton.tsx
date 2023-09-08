/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

const FloatingButton = ({children}: PropsWithChildren) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 16,
        right: 16,
        flexDirection: 'column',
        gap: 16,
        alignItems: 'center',
      }}>
      {children}
    </View>
  );
};

export default FloatingButton;
