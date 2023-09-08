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
  tabInactive: '#87B9B3',
  tabActive: '#F6FBFF',
  ...commonColor,
};

const dark = {
  primary: '#20272F',
  secondary: '#0A9274',
  background: '#12191F',
  foreground: '#ECF3F9',
  tabInactive: '#6F7D85',
  tabActive: '#05A880',
  ...commonColor,
};

export default {light, dark};
