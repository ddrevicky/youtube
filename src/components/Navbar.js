import {
  AddVideoIcon,
  AppLogo,
  AppsIcon,
  MenuIcon,
  MicrophoneIcon,
  NotificationsIcon,
} from './Icons';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <MenuIcon />
        <AppLogo />
      </div>
      <div className="navbar-center">
        <MicrophoneIcon />
      </div>
      <div className="navbar-end">
        <AddVideoIcon />
        <AppsIcon />
        <NotificationsIcon />
        <img className="user-avatar" src="http://unsplash.it/32/32?gravity=center" />
      </div>
    </div>
  );
}

export default Navbar;
