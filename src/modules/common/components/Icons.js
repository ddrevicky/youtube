import {
  MdApps,
  MdExplore,
  MdHistory,
  MdHome,
  MdMenu,
  MdMic,
  MdNotifications,
  MdPlaylistAdd,
  MdPlaylistPlay,
  MdSearch,
  MdSubscriptions,
  MdThumbDown,
  MdThumbUp,
  MdVideoCall,
  MdVideoLibrary,
  MdWatchLater,
} from 'react-icons/md';
import { ReactComponent as YoutubeSvg } from '../../../assets/yt_logo_rgb_dark.svg';

export const MenuIcon = (props) => <MdMenu {...props} />;
export const AppsIcon = (props) => <MdApps {...props} />;
export const AddVideoIcon = (props) => <MdVideoCall {...props} />;
export const NotificationsIcon = (props) => <MdNotifications {...props} />;
export const MicrophoneIcon = (props) => <MdMic {...props} />;
export const SearchIcon = (props) => <MdSearch {...props} />;
export const PlaylistPlayIcon = (props) => <MdPlaylistPlay {...props} />;
export const PlaylistAddIcon = (props) => <MdPlaylistAdd {...props} />;

export const HomeIcon = (props) => <MdHome {...props} />;
export const ExploreIcon = (props) => <MdExplore {...props} />;
export const SubscriptionsIcon = (props) => <MdSubscriptions {...props} />;
export const VideoLibraryIcon = (props) => <MdVideoLibrary {...props} />;
export const HistoryIcon = (props) => <MdHistory {...props} />;
export const WatchLaterIcon = (props) => <MdWatchLater {...props} />;
export const ThumbUpIcon = (props) => <MdThumbUp {...props} />;
export const ThumbDownIcon = (props) => <MdThumbDown {...props} />;

export const AppLogo = () => <YoutubeSvg className="logo" width="90px" height="20px" />;
