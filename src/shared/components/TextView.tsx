import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import useColorTheme from '../hooks/useColorTheme';

const TextView = ({children}: PropsWithChildren) => {
  const color = useColorTheme();

  return <Text style={{color: color.foreground}}>{children}</Text>;
};

export default TextView;
