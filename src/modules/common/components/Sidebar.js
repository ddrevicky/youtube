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

const homeSectionItems = [
  { label: 'Home', path: routes.home, icon: <HomeIcon {...iconProps} /> },
  { label: 'Explore', path: routes.explore, icon: <ExploreIcon {...iconProps} /> },
  {
    label: 'Subscriptions',
    path: routes.subscriptions,
    icon: <SubscriptionsIcon {...iconProps} />,
  },
];

const userVideosSectionItems = [
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

const subscriptionsSectionItems = [
  { label: 'Library', path: routes.library, icon: <VideoLibraryIcon {...iconProps} /> },
];

function SidebarSection({ sectionItems }) {
  const location = useLocation();
  return (
    <>
      {sectionItems.map(({ label, path, icon }) => (
        <Link key={label} to={path}>
          <MenuItem label={label} icon={icon} isSelected={path === location.pathname} />
        </Link>
      ))}
    </>
  );
}

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarSection sectionItems={homeSectionItems} />
      <div className="divider"></div>
      <SidebarSection sectionItems={userVideosSectionItems} />
      <div className="divider"></div>
      <h3>Subscriptions</h3>
      <SidebarSection sectionItems={subscriptionsSectionItems} />
    </SidebarContainer>
  );
}

export default Sidebar;
