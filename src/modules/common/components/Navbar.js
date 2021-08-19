import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { routes } from '../../../utils';
import { AddVideoIcon, AppLogo, AppsIcon, MenuIcon, NotificationsIcon, SearchIcon } from './Icons';
import {
  NavbarCenter,
  NavbarContainer,
  NavbarEnd,
  NavbarStart,
  SearchButton,
  SearchInput,
  UserAvatar,
} from './Navbar.styles';

function Navbar() {
  const theme = useTheme();
  return (
    <NavbarContainer>
      <NavbarStart>
        <MenuIcon />
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
        <AddVideoIcon />
        <AppsIcon />
        <NotificationsIcon />
        <UserAvatar>
          <img src="http://unsplash.it/32/32?gravity=center" />
        </UserAvatar>
      </NavbarEnd>
    </NavbarContainer>
  );
}

export default Navbar;