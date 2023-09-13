import React from 'react';
import {BaseView} from '../../shared/components';
import ChatHeader from '../components/ChatHeader';
import ChatFooter from '../components/ChatFooter';
import ChatView from '../components/ChatView';
import {ChatProvider} from '../../shared/providers';
import {useRoute} from '@react-navigation/native';

const ChatsScreen = () => {
  const {params} = useRoute();
  const data = params?.data;

  return (
    <BaseView>
      <ChatProvider>
        <ChatHeader />
        <ChatView {...{data}} />
        <ChatFooter />
      </ChatProvider>
    </BaseView>
  );
};

export default ChatsScreen;
