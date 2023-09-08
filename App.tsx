import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/shared/routes/AppNavigator';
import {gStyles} from './src/shared/styles/gStyles';
import {StatusBar} from 'react-native';
import useColorTheme from './src/shared/hooks/useColorTheme';

export default function App() {
  const color = useColorTheme();

  return (
    <GestureHandlerRootView style={gStyles.flex1}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar backgroundColor={color.primary} />
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
