import React, {PropsWithChildren} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import useColorTheme from '../hooks/useColorTheme';

type PropsType = {
  style?: TextStyle;
};

const TextView = ({
  children,
  style,
  numberOfLines,
}: PropsWithChildren & PropsType & TextProps) => {
  const color = useColorTheme();

  return (
    <Text style={[{color: color.foreground}, style]} {...{numberOfLines}}>
      {children}
    </Text>
  );
};

export default TextView;
