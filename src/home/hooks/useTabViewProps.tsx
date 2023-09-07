import CommunityScreen from '../../community/CommunityScreen';
import ChatsScreen from '../../chats/ChatsScreen';
import StatusScreen from '../../status/StatusScreen';
import CallsScreen from '../../calls/CallsScreen';

type RoutesType = {
  key: string;
  title: string;
}[];

const useTabViewProps = () => {
  const routes: RoutesType = [
    {
      key: 'community',
      title: '',
    },
    {
      key: 'chats',
      title: 'Chats',
    },
    {
      key: 'status',
      title: 'Status',
    },
    {
      key: 'calls',
      title: 'Calls',
    },
  ];

  const sceneMap = {
    community: CommunityScreen,
    chats: ChatsScreen,
    status: StatusScreen,
    calls: CallsScreen,
  };

  return {routes, sceneMap};
};

export default useTabViewProps;
