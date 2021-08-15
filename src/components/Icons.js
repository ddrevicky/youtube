import { MdMenu, MdApps, MdNotifications, MdVideoCall, MdMic, MdSearch } from 'react-icons/md';
import { ReactComponent as YoutubeSvg } from '../assets/yt_logo_rgb_dark.svg';

export const MenuIcon = (props) => <MdMenu {...props} />;
export const AppsIcon = (props) => <MdApps {...props} />;
export const AddVideoIcon = (props) => <MdVideoCall {...props} />;
export const NotificationsIcon = (props) => <MdNotifications {...props} />;
export const MicrophoneIcon = (props) => <MdMic {...props} />;
export const SearchIcon = (props) => <MdSearch {...props} />;

export const AppLogo = () => <YoutubeSvg className="logo" width="90px" height="20px" />;
