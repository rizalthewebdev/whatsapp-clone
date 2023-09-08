import {StyleSheet} from 'react-native';

export const gStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowCenterBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  p2: {
    padding: 8,
  },
  p4: {
    padding: 16,
  },
  mb4: {
    marginBottom: 16,
  },
  roundedFull: {
    borderRadius: 99999,
  },
});
