import { AppContainer, BodyContainer, ContentContainer } from './AppLayout.styles';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function AppLayout({ children }) {
  return (
    <AppContainer>
      <Navbar />
      <BodyContainer>
        <Sidebar />
        <ContentContainer>{children}</ContentContainer>
      </BodyContainer>
    </AppContainer>
  );
}

export default AppLayout;
