import { Link } from 'react-router-dom';
import { routes } from '../utils';
import { ExploreIcon, HomeIcon, SubscriptionsIcon, VideoLibraryIcon } from './Icons';
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
];

function Sidebar() {
  return (
    <SidebarContainer>
      {sidebarMenuItems.map(({ title, path, icon }) => (
        <Link to={path}>
          <MenuItem title={title} icon={icon} />
        </Link>
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
