import React, {useMemo, useState} from 'react';
import {BaseView} from '../../shared/components';
import ChatHeader from '../components/ChatHeader';
import ChatFooter from '../components/ChatFooter';
import ChatView from '../components/ChatView';
import data from '../data/chats.json';

const ChatsScreen = () => {
  const [keyword, setKeyword] = useState('');
  const [chatsData, setChatsData] = useState(data);

  const filteredBank = useMemo(() => {
    if (keyword) {
      const filtered = chatsData?.filter(
        chat => chat?.text?.toLowerCase()?.indexOf(keyword.toLowerCase()) > -1,
      );

      return filtered;
    }
    return chatsData;
  }, [chatsData, keyword]);

  return (
    <BaseView>
      <ChatHeader {...{keyword, setKeyword}} />
      <ChatView {...{setChatsData, keyword}} chatsData={filteredBank} />
      <ChatFooter />
    </BaseView>
  );
};

export default ChatsScreen;
