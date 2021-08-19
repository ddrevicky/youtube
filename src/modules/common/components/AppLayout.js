import { Wrapper } from './AppLayout.styles';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function AppLayout({ children }) {
  return (
    <Wrapper>
      <div className="app">
        <Navbar />
        <div className="body">
          <Sidebar />
          <div className="content">{children}</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AppLayout;
