import React from 'react';
import HomeHeader from '../components/HomeHeader';
import {BaseView} from '../../shared/components';
import TabNavigator from '../../shared/routes/TabNavigator';

const HomeScreen = () => {
  return (
    <BaseView>
      <HomeHeader />
      <TabNavigator />
    </BaseView>
  );
};

export default HomeScreen;
