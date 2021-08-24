import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { routes } from '../../../utils';
import Avatar from './Avatar';
import { AddVideoIcon, AppLogo, AppsIcon, MenuIcon, NotificationsIcon, SearchIcon } from './Icons';
import {
  NavbarCenter,
  NavbarContainer,
  NavbarEnd,
  NavbarStart,
  SearchButton,
  SearchInput,
} from './Navbar.styles';

function Navbar() {
  const theme = useTheme();
  return (
    <NavbarContainer>
      <NavbarStart>
        <MenuIcon className="nav-icon" />
        <Link to={routes.home}>
          <AppLogo className="logo" />
        </Link>
      </NavbarStart>
      <NavbarCenter>
        <SearchInput type="text" placeholder="Search" />
        <SearchButton>
          <SearchIcon color={theme.colors.tertiary} size={theme.iconSizes.small} />
        </SearchButton>
        {/* TODO: Want this? */}
        {/* <MicrophoneButton>
          <MicrophoneIcon />
        </MicrophoneButton> */}
      </NavbarCenter>
      <NavbarEnd>
        <AddVideoIcon className="nav-icon" />
        <AppsIcon className="nav-icon" />
        <NotificationsIcon className="nav-icon" />
        <Avatar size="36px" />
      </NavbarEnd>
    </NavbarContainer>
  );
}

export default Navbar;
