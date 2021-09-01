import styled from '@emotion/styled/macro';

const NavbarContainer = styled.header`
  background: ${({ theme }) => theme.colors.menuBackground};
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.components.navbar.height};
  padding: '0 16px';
  z-index: 10;

  .nav-icon {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;

const NavbarStart = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 640px;
  margin-left: 40px;
  border: 1px solid #323232;
`;

const MicrophoneButton = styled.button`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.bodyBackground};
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

export { NavbarStart, SearchForm, NavbarEnd, NavbarContainer, MicrophoneButton };
