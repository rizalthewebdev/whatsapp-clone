import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../home/screens/HomeScreen';
import ChatsScreen from '../../chats/screens/ChatsScreen';
import DetailInformationScreen from '../../chats/screens/DetailInformationScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  ChatsScreen: {data: any};
  DetailInformationScreen: {data: any};
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={ChatsScreen} name="ChatsScreen" />
      <Stack.Screen
        component={DetailInformationScreen}
        name="DetailInformationScreen"
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
