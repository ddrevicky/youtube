const colors = {
  menuBackground: '#222',
  bodyBackground: '#181818',
  dynamicPopoverBackground: '#999',
  staticPopoverBackground: '#666',
  primary: '#FFF',
  secondary: '#999', // TODO: actually use this in components
  tertiary: '#6f6f6f',
  quaternary: '#383838', // divider, highlight
  quinary: '#323232', // search button
  blackish: '#121212',
  grey: '#202020',
  darkGrey: '#383838',
  black: '#121212',
  red: '#cc0a00',
  blue: '#3EA6FF',
  white: '#FFF',
  pink: '#F86782',
  purple: '#282A36',
};

const fontWeights = {
  regular: 400,
  medium: 500,
};

const iconSizes = {
  small: 20,
  medium: 24,
};

const paddings = {
  section: '20px',
};

const components = {
  navbar: { height: '56px' },
  sidebarLarge: { width: '240px' },
  sidebarMini: { width: '72px' },
  menuItem: {
    fontSize: '0.875rem',
    paddingVertical: '0.5rem',
    paddingHorizontal: '1.5rem',
  },
};

export const darkTheme = {
  colors,
  fontWeights,
  iconSizes,
  paddings,
  components,
  font: "'Roboto', Arial, sans-serif",
};
