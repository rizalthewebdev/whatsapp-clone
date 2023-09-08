/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {Dispatch, SetStateAction} from 'react';
import {Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import useTabViewProps from '../hooks/useTabViewProps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useColorTheme from '../hooks/useColorTheme';

type PropsType = {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
};

const TabNavigator = ({index, setIndex}: PropsType) => {
  const {width} = useWindowDimensions();
  const {routes, sceneMap} = useTabViewProps();
  const color = useColorTheme();

  const TabItem = ({route, focused}: any) => {
    if (route.key === 'community') {
      return (
        <Icon
          name="groups"
          size={20}
          color={focused ? color.tabActive : color.tabInactive}
        />
      );
    }

    return (
      <Text
        style={[
          {
            color: focused ? color.tabActive : color.tabInactive,
            fontWeight: '500',
          },
        ]}>
        {route?.title}
      </Text>
    );
  };

  return (
    <TabView
      lazy
      navigationState={{routes, index}}
      onIndexChange={setIndex}
      renderScene={SceneMap(sceneMap)}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={{backgroundColor: color.primary}}
          pressColor="transparent"
          indicatorStyle={{
            backgroundColor: color.tabActive,
          }}
          renderLabel={TabItem}
        />
      )}
      initialLayout={{width}}
    />
  );
};

export default TabNavigator;
