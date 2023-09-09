import React from 'react';
import {BaseView} from '../../shared/components';
import ChatHeader from '../components/ChatHeader';
import ChatFooter from '../components/ChatFooter';
import {ImageBackground, useColorScheme} from 'react-native';
import {gStyles} from '../../shared/styles/gStyles';
import ChatView from '../components/ChatView';

const ChatsScreen = () => {
  const theme = useColorScheme();
  const imageSource =
    theme === 'dark'
      ? require('../../shared/assets/images/chat-background-dark.jpeg')
      : require('../../shared/assets/images/chat-background-light.png');

  return (
    <BaseView>
      <ChatHeader />
      <ImageBackground source={imageSource} style={[gStyles.flex1]}>
        <ChatView />
        <ChatFooter />
      </ImageBackground>
    </BaseView>
  );
};

export default ChatsScreen;
