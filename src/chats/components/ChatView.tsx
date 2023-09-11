/* eslint-disable react-native/no-inline-styles */
import React, {Dispatch, SetStateAction} from 'react';
import {ImageBackground, useColorScheme} from 'react-native';
import {gStyles} from '../../shared/styles/gStyles';
import ChatItem from './ChatItem';
import {FlashList} from '@shopify/flash-list';

type PropsType = {
  chatsData: any;
  setChatsData: Dispatch<SetStateAction<any>>;
  keyword: string;
};

const ChatView = ({chatsData, setChatsData, keyword}: PropsType) => {
  const theme = useColorScheme();
  const imageSource =
    theme === 'dark'
      ? require('../../shared/assets/images/chat-background-dark.jpeg')
      : require('../../shared/assets/images/chat-background-light.png');

  const userId = 1;

  return (
    <ImageBackground source={imageSource} style={[gStyles.flex1]}>
      <FlashList
        contentContainerStyle={{paddingVertical: 8}}
        data={chatsData}
        renderItem={({item}) => (
          <ChatItem {...{item, userId, chatsData, setChatsData, keyword}} />
        )}
        estimatedItemSize={500}
      />
    </ImageBackground>
  );
};

export default ChatView;
