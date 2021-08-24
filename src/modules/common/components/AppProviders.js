import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
import { IconContext } from 'react-icons';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';

function AppProviders({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider theme={darkTheme}>
        <IconContext.Provider value={{ className: 'global-class-name' }}>
          <Router>
            <GlobalStyle />
            {children}
          </Router>
        </IconContext.Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default AppProviders;
