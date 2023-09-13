/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import ListChatItem from './ListChatItem';
import useQueryListChats from '../hooks/useQueryListChats';
import {TextView} from '../../shared/components';
import {gStyles} from '../../shared/styles/gStyles';

const ListChatsAndGroups = () => {
  const {data, isLoading, isRefetching, refetch} = useQueryListChats();

  const listChats = data?.data;

  if (isLoading) {
    return (
      <TextView style={[gStyles.my2, {textAlign: 'center'}]}>
        Loading...
      </TextView>
    );
  }

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
