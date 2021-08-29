import { Wrapper } from './AppLayout.styles';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SidebarMini from './SidebarMini';

function AppLayout({ children }) {
  return (
    <Wrapper>
      <Navbar />
      <div className="body">
        <Sidebar />
        {/* <SidebarMini /> */}
        <div className="content">{children}</div>
      </div>
    </Wrapper>
  );
}

export default AppLayout;
