/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {BaseView, TextView} from '../../shared/components';
import {View, useColorScheme} from 'react-native';
import useColorTheme from '../../shared/hooks/useColorTheme';
import HeaderDetailInformation from '../components/HeaderDetailInformation';
import {useIsFocused, useRoute} from '@react-navigation/native';
import {gStyles} from '../../shared/styles/gStyles';
import ImageProfile from '../components/ImageProfile';
import {useGlobalState} from '../../shared/providers/StateProvider';

const DetailInformationScreen = () => {
  const color = useColorTheme();
  const theme = useColorScheme();
  const isFocused = useIsFocused();
  const route = useRoute();
  const {setStatusBar} = useGlobalState();

  useEffect(() => {
    if (isFocused) {
      setStatusBar?.({
        barStyle: theme === 'dark' ? 'light-content' : 'dark-content',
        backgroundColor: color.background,
      });
    } else {
      setStatusBar?.({
        barStyle: 'light-content',
        backgroundColor: color.primary,
      });
    }
  }, [color.background, color.primary, isFocused, setStatusBar, theme]);

  // @ts-ignore
  const item = route?.params?.data;
  const isGroup = item?.category !== 'personal';

  return (
    <BaseView>
      <HeaderDetailInformation />
      <View style={[gStyles.flexCenter]}>
        <ImageProfile size={124} iconSize={48} {...{item}} />
        <TextView
          style={[
            {marginTop: 16, marginBottom: 4, fontWeight: '500', fontSize: 16},
          ]}>
          {item?.name}
        </TextView>
        {isGroup && (
          <View style={[gStyles.row, gStyles.itemsCenter, {gap: 4}]}>
            <TextView style={{color: color.gray, fontSize: 12}}>Group</TextView>
            <TextView style={{color: color.gray, fontSize: 12}}>•</TextView>
            <TextView style={{color: color.gray, fontSize: 12}}>
              2 participants
            </TextView>
          </View>
        )}

        <View style={[gStyles.row, gStyles.itemsCenter, {gap: 16}]}></View>
      </View>
    </BaseView>
  );
};

export default DetailInformationScreen;
