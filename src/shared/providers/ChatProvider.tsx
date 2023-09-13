import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import useQueryChatPersonal from '../../chats/hooks/useQueryChatPersonal';
import useQueryChatGroup from '../../chats/hooks/useQueryChatGroup';

type StateType = {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  chatsData: any;
  setChatsData: Dispatch<SetStateAction<any>>;
  filteredChats?: any;
  handleAddReactions?: ({reaction, data}: any) => void;
  handleAddNewMessage?: ({message}: {message: string}) => void;
  getChatsData?: (chatData: any) => void;
};

const defaultState: StateType = {
  keyword: '',
  setKeyword: (): void => {
    throw new Error('Function not implemented.');
  },
  chatsData: null,
  setChatsData: (): void => {
    throw new Error('Function not implemented.');
  },
};

const ChatContext = createContext<StateType>(defaultState);

const ChatProvider = ({children}: PropsWithChildren) => {
  const [keyword, setKeyword] = useState<StateType['keyword']>('');
  const [chatsData, setChatsData] = useState<StateType['chatsData']>(null);
  const [filteredChats, setFilteredChats] =
    useState<StateType['filteredChats']>(null);

  const {data: personalChatData} = useQueryChatPersonal();
  const {data: groupChatData} = useQueryChatGroup();

  const personalChat = personalChatData?.data;
  const groupChat = groupChatData?.data;

  const getChatsData = useCallback(
    (chatData: any) => {
      if (chatData.category === 'personal') {
        setChatsData(personalChat);
        return personalChat;
      } else {
        setChatsData(groupChat);
        return groupChat;
      }
    },
    [groupChat, personalChat],
  );

  const handleAddReactions = ({reaction, data}: any) => {
    const messageIndex = chatsData.findIndex(
      (message: any) => message.id === data?.id,
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

  const handleAddNewMessage = ({message}: {message: string}) => {
    const newMessage = {
      id: chatsData.length + 1,
      sender: 1,
      receiver: 5,
      timestamp: new Date().toISOString(),
      text: message,
      reactions: [],
    };

    const updatedMessages = [...chatsData, newMessage];

    setChatsData(updatedMessages);
  };

  useEffect(() => {
    if (keyword) {
      const filtered = chatsData?.filter(
        (chat: any) =>
          chat?.text?.toLowerCase()?.indexOf(keyword.toLowerCase()) > -1,
      );

      setFilteredChats(filtered);
    }
  }, [chatsData, keyword]);

  const stateValue: StateType = {
    keyword,
    setKeyword,
    chatsData,
    setChatsData,
    filteredChats,
    handleAddReactions,
    handleAddNewMessage,
    getChatsData,
  };

  return (
    <ChatContext.Provider value={stateValue}>{children}</ChatContext.Provider>
  );
};

export const useChats = (): StateType => {
  return useContext(ChatContext) || defaultState;
};

export default ChatProvider;
