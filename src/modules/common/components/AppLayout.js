import { useState } from 'react';
import { BodyContainer, ContentContainer, Wrapper } from './AppLayout.styles';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SidebarMini from './SidebarMini';

function AppLayout({ children }) {
  const [isSidebarLarge, setIsSidebarLarge] = useState(true);
  const toggleIsSidebarLarge = () => setIsSidebarLarge(!isSidebarLarge);

  return (
    <Wrapper>
      <Navbar toggleIsSidebarLarge={toggleIsSidebarLarge} />
      <BodyContainer>
        {isSidebarLarge ? <Sidebar /> : <SidebarMini />}
        <ContentContainer>{children}</ContentContainer>
      </BodyContainer>
    </Wrapper>
  );
}

export default AppLayout;
