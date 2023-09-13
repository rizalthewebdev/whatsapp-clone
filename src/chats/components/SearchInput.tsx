/* eslint-disable react-native/no-inline-styles */
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import useColorTheme from '../../shared/hooks/useColorTheme';
import {gStyles} from '../../shared/styles/gStyles';
import {TextInput, TouchableOpacity, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {useChats} from '../../shared/providers/ChatProvider';

type PropsType = {
  setIsSearching: Dispatch<SetStateAction<boolean>>;
};

const SearchInput = ({setIsSearching}: PropsType) => {
  const color = useColorTheme();
  const {keyword, setKeyword} = useChats();

  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);

  useEffect(() => {
    setDebouncedKeyword(keyword);
  }, [keyword]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setKeyword(debouncedKeyword);
    }, 500);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedKeyword]);

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
          value={debouncedKeyword}
          onChangeText={setDebouncedKeyword}
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
