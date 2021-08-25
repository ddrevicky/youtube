import styled from '@emotion/styled';

const NavbarContainer = styled.header`
  background: ${(props) => props.theme.colors.menuBackground};
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.theme.components.navbar.height};
  padding: '0 16px';

  .nav-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const NavbarStart = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
`;

const NavbarCenter = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 640px;
  margin-left: 40px;
  border: 1px solid #323232;
`;

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

const NavbarEnd = styled.div`
  justify-content: space-around;
  display: flex;
  align-items: center;
  gap: 1.7rem;
  margin-right: 1.7em;
`;

export {
  NavbarStart,
  NavbarCenter,
  NavbarEnd,
  NavbarContainer,
  SearchInput,
  SearchButton,
  MicrophoneButton,
};
