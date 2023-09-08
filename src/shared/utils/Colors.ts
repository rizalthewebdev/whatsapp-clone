const commonColor = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#67757C',
};

const light = {
  primary: '#067865',
  secondary: '#086C5B',
  background: '#FFFFFF',
  foreground: '#1A201E',
  profileBackground: '#D1D7DE',
  profileForeground: '#FFFFFF',
  tabInactive: '#87B9B3',
  tabActive: '#F6FBFF',
  backgroundWeaker: '#E2FDF4',
  iconActive: '#037158',
  ...commonColor,
};

const dark = {
  primary: '#20272F',
  secondary: '#0A9274',
  background: '#12191F',
  foreground: '#ECF3F9',
  profileBackground: '#637781',
  profileForeground: '#CACED1',
  tabInactive: '#6F7D85',
  tabActive: '#05A880',
  backgroundWeaker: '#3A4856',
  iconActive: '#D1D7DD',
  ...commonColor,
};

export default {light, dark};
