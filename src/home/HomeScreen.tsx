import React, {useState} from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import useTabViewProps from './hooks/useTabViewProps';
import {useWindowDimensions} from 'react-native';
import HomeHeader from '../shared/components/HomeHeader';
import Colors from '../shared/utils/Colors';

const HomeScreen = () => {
  const [index, setIndex] = useState(1);
  const {width} = useWindowDimensions();
  const {routes, sceneMap} = useTabViewProps();

  return (
    <>
      <HomeHeader />
      <TabView
        lazy
        navigationState={{routes, index}}
        onIndexChange={idx => setIndex(idx)}
        renderScene={SceneMap(sceneMap)}
        renderTabBar={props => (
          <TabBar
            style={{backgroundColor: Colors.dark.background}}
            {...props}
          />
        )}
        initialLayout={{width}}
      />
    </>
  );
};

export default HomeScreen;
