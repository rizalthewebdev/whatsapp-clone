import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {createContext, PropsWithChildren, useContext} from 'react';
import useColorTheme from '../hooks/useColorTheme';
import {Appearance} from 'react-native';
import Colors from '../utils/Colors';

type StatusBarType = {
  barStyle?: 'light-content' | 'dark-content';
  backgroundColor?: string;
};

type StateType = {
  statusBar: StatusBarType;
  setStatusBar?: Dispatch<SetStateAction<StatusBarType>>;
  tabNavigatorIndex: number;
  setTabNavigatorIndex: Dispatch<SetStateAction<number>>;
};

const defaultState: StateType = {
  statusBar: {},
  tabNavigatorIndex: 1,
  setTabNavigatorIndex: (): void => {
    throw new Error('Function not implemented.');
  },
};

const StateContext = createContext<StateType>(defaultState);

const StateProvider = ({children}: PropsWithChildren) => {
  const color = useColorTheme();

  const [tabNavigatorIndex, setTabNavigatorIndex] = useState<number>(
    defaultState.tabNavigatorIndex,
  );
  const [statusBar, setStatusBar] = useState<StatusBarType>({
    barStyle: 'light-content',
    backgroundColor: color.primary,
  });

  useEffect(() => {
    Appearance.addChangeListener((pref: Appearance.AppearancePreferences) => {
      setStatusBar({
        barStyle: 'light-content',
        backgroundColor: Colors?.[pref?.colorScheme ?? 'light']?.primary,
      });
    });
  }, []);

  const stateValue: StateType = {
    statusBar,
    setStatusBar,
    tabNavigatorIndex,
    setTabNavigatorIndex,
  };
  return (
    <StateContext.Provider value={stateValue}>{children}</StateContext.Provider>
  );
};

export const useGlobalState = (): StateType => {
  return useContext(StateContext) || defaultState;
};

export default StateProvider;
