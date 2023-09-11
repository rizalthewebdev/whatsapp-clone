/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {ReactNode} from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';
import useColorTheme from '../hooks/useColorTheme';
import {gStyles} from '../styles/gStyles';
import {TextView} from '.';
import {TouchableOpacity, View} from 'react-native';

type PropsType = {
  isVisible: boolean;
  onClose: () => any;
  children: ReactNode;
  onReactionPress?: (reaction: any) => any;
};

const ReactionTooltip = ({
  isVisible,
  onClose,
  children,
  onReactionPress,
}: PropsType) => {
  const color = useColorTheme();
  const reactions = ['👍🏻', '❤️', '😂', '🙏🏻'];

  const TooltipContent = () => {
    return (
      <View style={[gStyles.row, gStyles.itemsCenter, {gap: 8, width: 100}]}>
        {reactions.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              onReactionPress?.(item);
              onClose();
            }}>
            <TextView>{item}</TextView>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <Tooltip
      {...{isVisible, onClose}}
      placement="top"
      closeOnContentInteraction={false}
      content={<TooltipContent />}
      contentStyle={{backgroundColor: color.background}}>
      {children}
    </Tooltip>
  );
};

export default ReactionTooltip;
