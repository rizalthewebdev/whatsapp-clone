/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import data from '../data/chats-and-group-list.json';
import ChatItem from './ChatItem';

const ListChatsAndGroups = () => {
  return (
    <FlatList
      contentContainerStyle={{paddingVertical: 8}}
      data={data}
      renderItem={({item}) => <ChatItem {...{item}} />}
    />
  );
};

export default ListChatsAndGroups;
