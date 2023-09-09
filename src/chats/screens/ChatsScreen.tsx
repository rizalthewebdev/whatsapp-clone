import React from 'react';
import {BaseView} from '../../shared/components';
import ChatHeader from '../components/ChatHeader';
import ChatFooter from '../components/ChatFooter';
import {View} from 'react-native';
import {gStyles} from '../../shared/styles/gStyles';
import useColorTheme from '../../shared/hooks/useColorTheme';

const ChatsScreen = () => {
  const color = useColorTheme();

  return (
    <BaseView>
      <ChatHeader />
      <View style={[gStyles.flex1, {backgroundColor: color.profileBackground}]}>
        <ChatFooter />
      </View>
    </BaseView>
  );
};

export default ChatsScreen;
