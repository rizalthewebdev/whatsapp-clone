import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../home/screens/HomeScreen';

type StackParamList = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
    </Stack.Navigator>
  );
};

export default AppNavigator;
