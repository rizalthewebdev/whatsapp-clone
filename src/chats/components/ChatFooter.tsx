/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {gStyles} from '../../shared/styles/gStyles';
import useColorTheme from '../../shared/hooks/useColorTheme';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

const ChatFooter = () => {
  const color = useColorTheme();

  const [message, setMessage] = useState<string>('');

  return (
    <View
      style={[
        gStyles.row,
        gStyles.itemsCenter,
        gStyles.p2,
        {
          backgroundColor: 'transparent',
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
          {
            backgroundColor: color.inputMessageBackground,
            height: 44,
            borderWidth: 0.2,
            borderColor: color.gray,
          },
        ]}>
        <TouchableOpacity style={[gStyles.p2]}>
          <SimpleLineIcons name="emotsmile" size={18} color={color.gray} />
        </TouchableOpacity>
        <TextInput
          value={message}
          placeholder="Message"
          placeholderTextColor={color.gray}
          onChangeText={setMessage}
          style={[gStyles.flex1, {color: color.foreground, fontSize: 14}]}
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
          gStyles.flexCenter,
          {
            backgroundColor: color.secondary,
            elevation: 2,
            width: 44,
            height: 44,
          },
        ]}>
        <MaterialIcons
          name={message.trim() ? 'send' : 'keyboard-voice'}
          size={20}
          color={color.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChatFooter;
