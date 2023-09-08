import {useColorScheme} from 'react-native';
import Colors from '../utils/Colors';

const useColorTheme = () => {
  const theme = useColorScheme();

  return Colors?.[theme ?? 'light'];
};

export default useColorTheme;
