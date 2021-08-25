import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../../utils';
import {
  ExploreIcon,
  HomeIcon,
  SubscriptionsIcon,
  VideoLibraryIcon,
  WatchLaterIcon,
} from './Icons';
import { MenuItem } from './MenuItem';
import { SidebarContainer } from './Sidebar.styles';

// TODO: useTheme hook for sidebar icon size
const iconProps = {
  size: '1.5rem',
};

const sidebarHomeSectionItems = [
  { label: 'Home', path: routes.home, icon: <HomeIcon {...iconProps} /> },
  { label: 'Explore', path: routes.explore, icon: <ExploreIcon {...iconProps} /> },
  {
    label: 'Subscriptions',
    path: routes.subscriptions,
    icon: <SubscriptionsIcon {...iconProps} />,
  },
];

const sidebarUserVideosSectionItems = [
  { label: 'Library', path: routes.library, icon: <VideoLibraryIcon {...iconProps} /> },
  {
    label: 'Watch Later',
    path: routes.playlist + '/watchLater',
    icon: <WatchLaterIcon {...iconProps} />,
  },
  {
    label: 'Liked Videos',
    path: routes.playlist + '/liked',
    icon: <WatchLaterIcon {...iconProps} />,
  },
];

function Sidebar() {
  // TODO: get page url, based on that assign css class selected to menuItem
  //
  const location = useLocation();
  const currentPath = location.pathname;
  // location.pathname;
  console.log(`location`);
  console.log(location);
  return (
    <SidebarContainer>
      {sidebarHomeSectionItems.map(({ label, path, icon }) => (
        <Link key={label} to={path}>
          <MenuItem label={label} icon={icon} isSelected={path === currentPath} />
        </Link>
      ))}
      <div className="divider"></div>
      {sidebarUserVideosSectionItems.map(({ label, path, icon }) => (
        <Link key={label} to={path}>
          <MenuItem label={label} icon={icon} isSelected={path === currentPath} />
        </Link>
      ))}
      <div className="divider"></div>
      <div>Subscriptions</div>
    </SidebarContainer>
  );
}

export default Sidebar;
