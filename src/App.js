import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Library from './pages/Library';
import Subscriptions from './pages/Subscriptions';
import './reset.css';
import './App.css';
import AppLayout from './components/AppLayout';
import SearchResults from './pages/SearchResults';
import { routes } from './utils';
import Explore from './pages/Explore';

function App() {
  return (
    <AppLayout>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.explore} component={Explore} />
        <Route exact path={routes.subscriptions} component={Subscriptions} />
        <Route exact path={routes.library} component={Library} />
        <Route exact path={routes.trending} component={Trending} />
        <Route path="/results/:searchQuery" component={SearchResults} />
      </Switch>
    </AppLayout>
  );
}

export default App;
