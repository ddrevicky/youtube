import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { routes } from '../../../utils';
import {
  ExploreIcon,
  HomeIcon,
  SubscriptionsIcon,
  VideoLibraryIcon,
  WatchLaterIcon,
} from './Icons';
import {
  MenuItemContainer,
  SidebarContainer,
  MenuItemIconContainer,
  MenuItemLabelContainer,
} from './Sidebar.styles';

function MenuItem({ title, icon }) {
  return (
    <MenuItemContainer>
      <MenuItemIconContainer>{icon}</MenuItemIconContainer>
      <MenuItemLabelContainer>{title}</MenuItemLabelContainer>
    </MenuItemContainer>
  );
}

// TODO: useTheme hook for sidebar icon size
const iconProps = {
  size: '1.5rem',
};

const sidebarHomeSectionItems = [
  { title: 'Home', path: routes.home, icon: <HomeIcon {...iconProps} /> },
  { title: 'Explore', path: routes.explore, icon: <ExploreIcon {...iconProps} /> },
  {
    title: 'Subscriptions',
    path: routes.subscriptions,
    icon: <SubscriptionsIcon {...iconProps} />,
  },
];

const sidebarUserVideosSectionItems = [
  { title: 'Library', path: routes.library, icon: <VideoLibraryIcon {...iconProps} /> },
  {
    title: 'Watch Later',
    path: routes.playlist + '/watchLater',
    icon: <WatchLaterIcon {...iconProps} />,
  },
  {
    title: 'Liked Videos',
    path: routes.playlist + '/liked',
    icon: <WatchLaterIcon {...iconProps} />,
  },
];

function Sidebar() {
  // TODO: get page url, based on that assign css class selected to menuItem
  //
  return (
    <SidebarContainer>
      {sidebarHomeSectionItems.map(({ title, path, icon }) => (
        <Link key={title} to={path}>
          <MenuItem title={title} icon={icon} />
        </Link>
      ))}
      <div className="divider"></div>
      {sidebarUserVideosSectionItems.map(({ title, path, icon }) => (
        <Link key={title} to={path}>
          <MenuItem title={title} icon={icon} />
        </Link>
      ))}
      <div className="divider"></div>
      <div>Subscriptions</div>
    </SidebarContainer>
  );
}

export default Sidebar;
