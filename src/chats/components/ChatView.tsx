/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {ImageBackground, View, useColorScheme} from 'react-native';
import {gStyles} from '../../shared/styles/gStyles';
import ChatItem from './ChatItem';
import {FlashList} from '@shopify/flash-list';
import {useChats} from '../../shared/providers/ChatProvider';
import {TextView} from '../../shared/components';
import useQueryChatPersonal from '../hooks/useQueryChatPersonal';
import useQueryChatGroup from '../hooks/useQueryChatGroup';

const ChatView = ({data}: any) => {
  const theme = useColorScheme();
  const {isLoading: isPersonalChatLoading} = useQueryChatPersonal();
  const {isLoading: isGroupChatLoading} = useQueryChatGroup();
  const {getChatsData, chatsData, keyword, filteredChats} = useChats();

  const imageSource =
    theme === 'dark'
      ? require('../../shared/assets/images/chat-background-dark.jpeg')
      : require('../../shared/assets/images/chat-background-light.png');

  const userId = 1;

  useEffect(() => {
    getChatsData?.(data);
  }, [data, getChatsData]);

  if (isGroupChatLoading || isPersonalChatLoading) {
    return (
      <ImageBackground source={imageSource} style={[gStyles.flex1]}>
        <View style={[gStyles.flex1, gStyles.flexCenter]}>
          <TextView>Loading ...</TextView>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={imageSource} style={[gStyles.flex1]}>
      <FlashList
        contentContainerStyle={{paddingVertical: 8}}
        {...{data: keyword ? filteredChats : chatsData}}
        renderItem={({item}) => <ChatItem {...{item, userId}} />}
        estimatedItemSize={500}
      />
    </ImageBackground>
  );
};

export default ChatView;
