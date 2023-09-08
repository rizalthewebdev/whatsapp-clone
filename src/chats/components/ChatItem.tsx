/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableNativeFeedback, View} from 'react-native';
import {gStyles} from '../../shared/styles/gStyles';
import {TextView} from '../../shared/components';
import ImageProfile from './ImageProfile';
import useColorTheme from '../../shared/hooks/useColorTheme';

type PropsType = {
  item: any;
};

const ChatItem = ({item}: PropsType) => {
  const color = useColorTheme();

  return (
    <TouchableNativeFeedback>
      <View style={[gStyles.flexRowCenterBetween, gStyles.px4, gStyles.py2]}>
        <View style={[gStyles.row, gStyles.itemsCenter]}>
          <ImageProfile {...{item}} />
          <View style={[gStyles.ml4]}>
            <TextView style={{fontWeight: '600', marginBottom: 4}}>
              {item?.name}
            </TextView>
            <TextView style={{fontWeight: '400', color: color.gray}}>
              {item?.lastMessage}
            </TextView>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ChatItem;
