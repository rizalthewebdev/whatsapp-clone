import React, {PropsWithChildren} from 'react';
import {Text, TextStyle} from 'react-native';
import useColorTheme from '../hooks/useColorTheme';

type PropsType = {
  style?: TextStyle;
};

const TextView = ({children, style}: PropsWithChildren & PropsType) => {
  const color = useColorTheme();

  return <Text style={[{color: color.foreground}, style]}>{children}</Text>;
};

export default TextView;
