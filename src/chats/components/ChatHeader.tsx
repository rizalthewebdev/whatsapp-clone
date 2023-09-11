/* eslint-disable react-native/no-inline-styles */
import React, {Dispatch, SetStateAction, useState} from 'react';
import {Pressable, TouchableOpacity, View} from 'react-native';
import {gStyles} from '../../shared/styles/gStyles';
import useColorTheme from '../../shared/hooks/useColorTheme';
import FeatherIcons from 'react-native-vector-icons/Feather';
import ImageProfile from './ImageProfile';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TextView} from '../../shared/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../shared/routes/AppNavigator';
import SearchInput from './SearchInput';

type PropsType = {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
};

const ChatHeader = ({keyword, setKeyword}: PropsType) => {
  const color = useColorTheme();
  const [isSearching, setIsSearching] = useState(false);

  const route = useRoute();
  // @ts-ignore
  const item = route?.params?.data;
  const {goBack, navigate} =
    useNavigation<StackNavigationProp<RootStackParamList>>();

  if (isSearching) {
    return <SearchInput {...{keyword, setKeyword, setIsSearching}} />;
  }

  return (
    <View
      style={[
        gStyles.py2,
        gStyles.flexRowCenterBetween,
        gStyles.px2,
        {backgroundColor: color.primary, maxWidth: '100%'},
      ]}>
      <View style={[gStyles.row, gStyles.itemsCenter, gStyles.flex1]}>
        <Pressable
          onPress={goBack}
          style={[gStyles.row, gStyles.itemsCenter, {gap: 2}]}>
          <FeatherIcons name="arrow-left" color={color.white} size={20} />
          <ImageProfile size={40} iconSize={16} {...{item}} />
        </Pressable>
        <TouchableOpacity
          onPress={() => {
            navigate('DetailInformationScreen', {data: item});
          }}>
          <TextView
            numberOfLines={1}
            style={{
              fontWeight: '700',
              color: color.white,
              marginLeft: 8,
              fontSize: 16,
            }}>
            {item?.name}
          </TextView>
        </TouchableOpacity>
      </View>

      <View
        style={[
          gStyles.flex1,
          gStyles.row,
          gStyles.itemsCenter,
          {gap: 24, justifyContent: 'flex-end'},
        ]}>
        <Ionicons name="videocam" size={20} color={color.white} />
        <MaterialIcons name="call" size={20} color={color.white} />
        <TouchableOpacity onPress={() => setIsSearching(true)}>
          <FeatherIcons name="search" size={20} color={color.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatHeader;
