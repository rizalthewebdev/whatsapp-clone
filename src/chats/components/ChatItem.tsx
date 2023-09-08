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
        <View style={[gStyles.row, gStyles.itemsCenter, gStyles.flex1]}>
          <ImageProfile {...{item}} />
          <View style={[gStyles.ml4]}>
            <TextView style={{fontWeight: '600', marginBottom: 4}}>
              {item?.name}
            </TextView>
            <TextView
              style={{fontWeight: '400', color: color.gray, fontSize: 13}}>
              {item?.lastMessage}
            </TextView>
          </View>

          <View style={[gStyles.flex1, {alignItems: 'flex-end'}]}>
            <TextView
              style={{
                fontSize: 12,
                marginBottom: 8,
                fontWeight: '600',
                color:
                  item?.unreadMessages > 0
                    ? color.tabActive
                    : color?.foreground,
              }}>
              {item?.timestamp}
            </TextView>
            {item?.unreadMessages !== 0 ? (
              <View
                style={[
                  gStyles.flexCenter,
                  {
                    width: 16,
                    height: 16,
                    backgroundColor: color.tabActive,
                    borderRadius: 8,
                  },
                ]}>
                <TextView
                  style={{
                    fontSize: 10,
                    color: color.background,
                    fontWeight: '500',
                  }}>
                  {item?.unreadMessages}
                </TextView>
              </View>
            ) : (
              <TextView />
            )}
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ChatItem;
