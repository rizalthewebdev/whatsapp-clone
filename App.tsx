import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/shared/routes/AppNavigator';
import {gStyles} from './src/shared/styles/gStyles';
import {StatusBar} from 'react-native';
import useColorTheme from './src/shared/hooks/useColorTheme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {persistQueryClient} from '@tanstack/react-query-persist-client';

export default function App() {
  const color = useColorTheme();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        networkMode: 'online',
        staleTime: 1000 * 60 * 5, // 5 minutes
        cacheTime: 1000 * 60 * 10, // 10 minutes
        meta: {
          persist: false,
        },
      },
    },
  });

  const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
  });

  persistQueryClient({
    queryClient,
    persister: asyncStoragePersister,
  });

  return (
    <GestureHandlerRootView style={gStyles.flex1}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <StatusBar backgroundColor={color.primary} />
            <AppNavigator />
          </NavigationContainer>
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
