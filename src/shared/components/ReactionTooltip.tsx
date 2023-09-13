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
  onReactionPress?: ({reaction, data}: any) => any;
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
        {reactions.map((reaction, index) => (
          <TouchableOpacity
            key={index}
            style={[gStyles.shadow]}
            onPress={() => {
              onReactionPress?.({reaction});
              onClose();
            }}>
            <TextView>{reaction}</TextView>
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
      contentStyle={[gStyles.shadow, {backgroundColor: color.background}]}>
      {children}
    </Tooltip>
  );
};

export default ReactionTooltip;
