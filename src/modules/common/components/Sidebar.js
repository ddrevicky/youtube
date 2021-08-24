import { Link } from 'react-router-dom';
import { routes } from '../../../utils';
import {
  ExploreIcon,
  HomeIcon,
  SubscriptionsIcon,
  VideoLibraryIcon,
  WatchLaterIcon,
} from './Icons';
import { MenuItemContainer, SidebarContainer } from './Sidebar.styles';

function MenuItem({ title, icon }) {
  return (
    <MenuItemContainer>
      {icon}
      {title}
    </MenuItemContainer>
  );
}

const sidebarMenuItems = [
  { title: 'Home', path: routes.home, icon: <HomeIcon /> },
  { title: 'Explore', path: routes.explore, icon: <ExploreIcon /> },
  { title: 'Subscriptions', path: routes.subscriptions, icon: <SubscriptionsIcon /> },
  { title: 'Library', path: routes.library, icon: <VideoLibraryIcon /> },
  {
    title: 'Watch Later',
    path: routes.playlist + '/watchLater',
    icon: <WatchLaterIcon />,
  },
  {
    title: 'Liked Videos',
    path: routes.playlist + '/liked',
    icon: <WatchLaterIcon />,
  },
];

function Sidebar() {
  return (
    <SidebarContainer>
      {sidebarMenuItems.map(({ title, path, icon }) => (
        <Link key={title} to={path}>
          <MenuItem title={title} icon={icon} />
        </Link>
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
