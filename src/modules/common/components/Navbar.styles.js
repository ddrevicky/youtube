import styled from '@emotion/styled';

const NavbarContainer = styled.header(({ theme }) => ({
  backgroundColor: theme.colors.menuBackground,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '56px',
  padding: '0 16px',
}));

const NavbarStart = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const NavbarCenter = styled.form(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '640px',
  marginLeft: '40px',
  border: `1px solid #323232`,
}));

const SearchInput = styled.input(({ theme }) => ({
  backgroundColor: theme.colors.blackish,
  color: theme.colors.secondary,
  border: 'none',
  padding: '0.4rem 0.8rem',
  lineHeight: '24px',
  fontSize: '1.1rem',
  fontFamily: theme.font,
  flexGrow: 1,
  flexShrink: 1,
  width: '100%',
}));

const SearchButton = styled.button`
  background-color: #323232;
  width: 75px;
  height: 100%;
  border: none;
  padding: 0.44rem 0;
`;

const MicrophoneButton = styled.button`
  padding: 8px;
  background-color: #181818;
  border: none;
  border-radius: 50%;
`;

const NavbarEnd = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.7rem',
}));

export {
  NavbarStart,
  NavbarCenter,
  NavbarEnd,
  NavbarContainer,
  SearchInput,
  SearchButton,
  MicrophoneButton,
};
