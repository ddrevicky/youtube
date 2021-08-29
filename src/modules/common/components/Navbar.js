import { Link } from 'react-router-dom';
import { routes } from '../../../utils';
import Avatar from './Avatar';
import { AddVideoIcon, AppLogo, AppsIcon, MenuIcon, NotificationsIcon } from './Icons';
import { NavbarContainer, NavbarEnd, NavbarStart } from './Navbar.styles';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarStart>
        <MenuIcon className="nav-icon" />
        <Link to={routes.home}>
          <AppLogo className="logo" />
        </Link>
      </NavbarStart>
      <SearchBar />
      <NavbarEnd>
        <AddVideoIcon className="nav-icon" />
        <AppsIcon className="nav-icon" />
        <NotificationsIcon className="nav-icon" />
        <Avatar size="32px" />
      </NavbarEnd>
    </NavbarContainer>
  );
}

export default Navbar;
