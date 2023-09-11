/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ListChatsAndGroups from '../components/ListChatsAndGroups';
import useColorTheme from '../../shared/hooks/useColorTheme';
import {FloatingButton} from '../../shared/components';
import {TouchableOpacity} from 'react-native';
import {gStyles} from '../../shared/styles/gStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ListChatsScreen = () => {
  const color = useColorTheme();

  return (
    <>
      <ListChatsAndGroups />
      <FloatingButton>
        <TouchableOpacity
          style={[
            gStyles.p4,
            {backgroundColor: color.secondary, borderRadius: 16},
          ]}>
          <MaterialIcons name="chat" size={20} color={color.background} />
        </TouchableOpacity>
      </FloatingButton>
    </>
  );
};

export default ListChatsScreen;
