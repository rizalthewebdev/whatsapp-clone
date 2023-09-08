import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../home/screens/HomeScreen';
import ChatsScreen from '../../chats/screens/ChatsScreen';
import UserDetailScreen from '../../chats/screens/UserDetailScreen';
import GroupDetailScreen from '../../chats/screens/GroupDetailScreen';

type StackParamList = {
  HomeScreen: undefined;
  ChatsScreen: undefined;
  UserDetailScreen: undefined;
  GroupDetailScreen: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={ChatsScreen} name="ChatsScreen" />
      <Stack.Screen component={UserDetailScreen} name="UserDetailScreen" />
      <Stack.Screen component={GroupDetailScreen} name="GroupDetailScreen" />
    </Stack.Navigator>
  );
};

export default AppNavigator;
