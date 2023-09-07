import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/home/routes/AppNavigator';
import {gStyles} from './src/shared/styles/gStyles';
import {useColorScheme} from 'react-native';

export default function App() {
  const theme = useColorScheme();

  return (
    <GestureHandlerRootView style={gStyles.flex1}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
