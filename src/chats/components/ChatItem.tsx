/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {gStyles} from '../../shared/styles/gStyles';
import {Hightlighter, ReactionTooltip, TextView} from '../../shared/components';
import useColorTheme from '../../shared/hooks/useColorTheme';
import {useChats} from '../../shared/providers/ChatProvider';

const ChatItem = ({item, userId}: any) => {
  const color = useColorTheme();
  const {keyword, handleAddReactions} = useChats();
  const [showTooltip, setShowTooltip] = useState(false);
  const isSender = item?.sender === userId;

  return (
    <ReactionTooltip
      isVisible={showTooltip}
      onReactionPress={({reaction}) =>
        handleAddReactions?.({reaction, data: item})
      }
      onClose={() => setShowTooltip(false)}>
      <TouchableOpacity
        onLongPress={() => setShowTooltip(true)}
        onPress={() => setShowTooltip(true)}
        style={[
          gStyles.p2,
          gStyles.mx2,
          gStyles.shadow,
          {
            borderRadius: 12,
            borderTopLeftRadius: isSender ? 12 : 0,
            borderTopRightRadius: isSender ? 0 : 12,
            backgroundColor: isSender
              ? color.chatSenderBackground
              : color.chatReceiverBackground,
            alignSelf: isSender ? 'flex-end' : 'flex-start',
            marginBottom: 8,
            maxWidth: '80%',
          },
        ]}>
        {!isSender && item?.senderName && (
          <TextView
            style={[
              {
                paddingBottom: 4,
                fontWeight: '600',
                alignSelf: isSender ? 'flex-end' : 'flex-start',
              },
            ]}>
            {item?.senderName}
          </TextView>
        )}
        <Hightlighter searchWords={[keyword]} text={item?.text} />

        <View
          style={[gStyles.row, gStyles.itemsCenter, {alignSelf: 'flex-end'}]}>
          {item?.reactions?.map((reaction: any, index: number) => (
            <TextView key={index}>{reaction}</TextView>
          ))}
        </View>
      </TouchableOpacity>
    </ReactionTooltip>
  );
};

export default ChatItem;
