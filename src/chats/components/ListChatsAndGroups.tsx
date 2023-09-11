/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import ListChatItem from './ListChatItem';
import useQueryListChats from '../hooks/useQueryListChats';

const ListChatsAndGroups = () => {
  const {data, isLoading, isRefetching, refetch} = useQueryListChats();

  const listChats = data?.data;

  if (isLoading) return null;

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
      contentContainerStyle={{paddingVertical: 8}}
      data={listChats}
      renderItem={({item}) => <ListChatItem {...{item}} />}
    />
  );
};

export default ListChatsAndGroups;
