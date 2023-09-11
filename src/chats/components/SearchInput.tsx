/* eslint-disable react-native/no-inline-styles */
import React, {Dispatch, SetStateAction} from 'react';
import useColorTheme from '../../shared/hooks/useColorTheme';
import {gStyles} from '../../shared/styles/gStyles';
import {TextInput, TouchableOpacity, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

type PropsType = {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
};

const SearchInput = ({keyword, setKeyword, setIsSearching}: PropsType) => {
  const color = useColorTheme();

  return (
    <View
      style={[
        gStyles.py2,
        gStyles.flexRowCenterBetween,
        gStyles.px2,
        {backgroundColor: color.primary, maxWidth: '100%'},
      ]}>
      <View
        style={[
          gStyles.row,
          gStyles.itemsCenter,
          gStyles.p2,
          gStyles.roundedFull,
          gStyles.mx2,
          {backgroundColor: color.background},
        ]}>
        <TouchableOpacity onPress={() => setIsSearching(false)}>
          <FeatherIcons name="arrow-left" size={20} color={color.foreground} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          placeholderTextColor={color.gray}
          autoFocus
          value={keyword}
          onChangeText={setKeyword}
          style={[
            gStyles.flex1,
            {
              fontSize: 14,
              padding: 0,
              paddingLeft: 8,
              color: color.foreground,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default SearchInput;
