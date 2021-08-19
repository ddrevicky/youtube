import {
  MdMenu,
  MdApps,
  MdNotifications,
  MdVideoCall,
  MdMic,
  MdSearch,
  MdExplore,
  MdHome,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
} from 'react-icons/md';
import { ReactComponent as YoutubeSvg } from '../../../assets/yt_logo_rgb_dark.svg';

export const MenuIcon = (props) => <MdMenu {...props} />;
export const AppsIcon = (props) => <MdApps {...props} />;
export const AddVideoIcon = (props) => <MdVideoCall {...props} />;
export const NotificationsIcon = (props) => <MdNotifications {...props} />;
export const MicrophoneIcon = (props) => <MdMic {...props} />;
export const SearchIcon = (props) => <MdSearch {...props} />;

export const HomeIcon = (props) => <MdHome {...props} />;
export const ExploreIcon = (props) => <MdExplore {...props} />;
export const SubscriptionsIcon = (props) => <MdSubscriptions {...props} />;
export const VideoLibraryIcon = (props) => <MdVideoLibrary {...props} />;
export const HistoryIcon = (props) => <MdHistory {...props} />;

export const AppLogo = () => <YoutubeSvg className="logo" width="90px" height="20px" />;
