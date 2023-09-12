import React from 'react';
import {SafeAreaView} from 'react-native';
import {StatusBar as RNStatusBar} from 'react-native';
import {useGlobalState} from '../providers/StateProvider';

const StatusBar = () => {
  const {
    statusBar: {backgroundColor, barStyle},
  } = useGlobalState();

  return (
    <SafeAreaView style={{backgroundColor}}>
      <RNStatusBar {...{barStyle, backgroundColor}} translucent animated />
    </SafeAreaView>
  );
};

export default StatusBar;
