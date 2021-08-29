import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../../utils';
import { ExploreIcon, HomeIcon, SubscriptionsIcon, VideoLibraryIcon } from './Icons';
import { SidebarMiniContainer } from './SidebarMini.styles';

const iconProps = {
  size: '1.5rem',
};

const miniSidebarItems = [
  { label: 'Home', path: routes.home, icon: <HomeIcon {...iconProps} /> },
  { label: 'Explore', path: routes.explore, icon: <ExploreIcon {...iconProps} /> },
  {
    label: 'Subscriptions',
    path: routes.subscriptions,
    icon: <SubscriptionsIcon {...iconProps} />,
  },
  { label: 'Library', path: routes.library, icon: <VideoLibraryIcon {...iconProps} /> },
];

function MenuItemMini({ label, icon, isSelected }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>{icon}</div>
      <span>{label}</span>
    </div>
  );
}

function SidebarMini() {
  const location = useLocation();
  return (
    <SidebarMiniContainer>
      {miniSidebarItems.map(({ label, path, icon }) => (
        <Link key={label} to={path}>
          <MenuItemMini label={label} icon={icon} isSelected={path === location.pathname} />
        </Link>
      ))}
    </SidebarMiniContainer>
  );
}

export default SidebarMini;
