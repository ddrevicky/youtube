import { MdMenu, MdApps, MdNotifications, MdVideoCall, MdMic } from 'react-icons/md';
import { ReactComponent as YoutubeSvg } from '../assets/yt_logo_rgb_dark.svg';

export const MenuIcon = () => <MdMenu />;
export const AppsIcon = () => <MdApps />;
export const AddVideoIcon = () => <MdVideoCall />;
export const NotificationsIcon = () => <MdNotifications />;
export const MicrophoneIcon = () => <MdMic />;

export const AppLogo = () => <YoutubeSvg className="logo" width="90px" height="20px" />;
