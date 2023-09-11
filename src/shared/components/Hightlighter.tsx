/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import useColorTheme from '../hooks/useColorTheme';
import {TextProps, TextStyle} from 'react-native';
import HighlightText from '@sanar/react-native-highlight-text';

type PropsType = {
  style?: TextStyle;
  text: string;
  searchWords: string[];
};

const Hightlighter = ({
  text,
  numberOfLines,
  style,
  searchWords,
}: PropsType & TextProps) => {
  const color = useColorTheme();

  return (
    <HighlightText
      style={[{color: color.foreground}, style]}
      {...{numberOfLines, searchWords}}
      highlightStyle={{backgroundColor: 'yellow'}}
      textToHighlight={text}
    />
  );
};

export default Hightlighter;
