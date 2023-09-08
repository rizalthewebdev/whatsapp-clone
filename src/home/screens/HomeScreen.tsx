import React, {useState} from 'react';
import HomeHeader from '../components/HomeHeader';
import {BaseView} from '../../shared/components';
import TabNavigator from '../../shared/routes/TabNavigator';

const HomeScreen = () => {
  const [index, setIndex] = useState<number>(1);

  return (
    <BaseView>
      <HomeHeader {...{index}} />
      <TabNavigator {...{index, setIndex}} />
    </BaseView>
  );
};

export default HomeScreen;
