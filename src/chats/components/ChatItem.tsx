/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {gStyles} from '../../shared/styles/gStyles';
import {Hightlighter, ReactionTooltip, TextView} from '../../shared/components';
import useColorTheme from '../../shared/hooks/useColorTheme';

const ChatItem = ({item, userId, chatsData, setChatsData, keyword}: any) => {
  const color = useColorTheme();
  const [showTooltip, setShowTooltip] = useState(false);
  const isSender = item?.sender === userId;

  const handleAddReaction = (reaction: any) => {
    const messageIndex = chatsData.findIndex(
      (message: any) => message.id === item?.id,
    );

    if (messageIndex !== -1) {
      const existingReactions = chatsData[messageIndex].reactions;

      if (!existingReactions.includes(reaction)) {
        const updatedMessage = {
          ...chatsData[messageIndex],
          reactions: [...existingReactions, reaction],
        };

        const updatedMessages = [...chatsData];
        updatedMessages[messageIndex] = updatedMessage;

        setChatsData(updatedMessages);
      } else {
        const filteredReactions = existingReactions.filter(
          (existingReaction: any) => existingReaction !== reaction,
        );
        const updatedMessage = {
          ...chatsData[messageIndex],
          reactions: filteredReactions,
        };

        const updatedMessages = [...chatsData];
        updatedMessages[messageIndex] = updatedMessage;

        setChatsData(updatedMessages);
      }
    }
  };

  return (
    <ReactionTooltip
      isVisible={showTooltip}
      onReactionPress={handleAddReaction}
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
          },
        ]}>
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
