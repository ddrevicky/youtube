import { Link } from 'react-router-dom';
import { routes } from '../utils';
import { ExploreIcon } from './Icons';
import { MenuItemContainer, SidebarContainer } from './Sidebar.styles';

function MenuItem({ title, icon }) {
  return (
    <MenuItemContainer>
      <ExploreIcon />
      {icon}
      {title}
    </MenuItemContainer>
  );
}

const sidebarMenuItems = [
  { title: 'Home', path: routes.home },
  { title: 'Explore', path: routes.explore, icon: <ExploreIcon /> },
  { title: 'Subscriptions', path: routes.subscriptions },
  { title: 'Library', path: routes.library },
  { title: 'Trending', path: routes.trending },
  // { title: 'Your videos' },
  // { title: 'Watch later' },
  // { title: 'Your clips' },
];

function Sidebar() {
  return (
    <SidebarContainer>
      {sidebarMenuItems.map(({ title, path }) => (
        <Link to={path}>
          <MenuItem title={title} />
        </Link>
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
