import {useColorScheme} from 'react-native';
import Colors from '../utils/Colors';
import {useMemo} from 'react';

const useColorTheme = () => {
  const theme = useColorScheme();

  const color = useMemo(() => {
    return Colors?.[theme ?? 'light'];
  }, [theme]);

  return color;
};

export default useColorTheme;
