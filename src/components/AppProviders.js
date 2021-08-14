import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
import { IconContext } from 'react-icons';

function AppProviders({ children }) {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <IconContext.Provider
          value={{ size: '24px', color: 'white', className: 'global-class-name' }}
        >
          <Router>{children}</Router>
        </IconContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default AppProviders;
