/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {gStyles} from '../../shared/styles/gStyles';
import useColorTheme from '../../shared/hooks/useColorTheme';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

const ChatFooter = () => {
  const color = useColorTheme();

  return (
    <View
      style={[
        gStyles.row,
        gStyles.itemsCenter,
        gStyles.p2,
        {
          backgroundColor: color.profileBackground,
          gap: 8,
          position: 'absolute',
          bottom: 0,
        },
      ]}>
      <View
        style={[
          gStyles.flex1,
          gStyles.row,
          gStyles.itemsCenter,
          gStyles.roundedFull,
          {backgroundColor: color.white, height: 40},
        ]}>
        <TouchableOpacity style={[gStyles.p2]}>
          <SimpleLineIcons name="emotsmile" size={18} color={color.gray} />
        </TouchableOpacity>
        <TextInput
          placeholder="Message"
          placeholderTextColor={color.gray}
          style={[gStyles.flex1, {color: color.black, fontSize: 14}]}
        />
        <View
          style={[
            gStyles.row,
            gStyles.itemsCenter,
            {gap: 16, marginRight: 12, marginLeft: 8},
          ]}>
          <TouchableOpacity>
            <SimpleLineIcons name="paper-clip" size={16} color={color.gray} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcons name="camera" size={16} color={color.gray} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={[
          gStyles.roundedFull,
          gStyles.p3,
          {backgroundColor: color.secondary, elevation: 2},
        ]}>
        <MaterialIcons name="keyboard-voice" size={20} color={color.white} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatFooter;
