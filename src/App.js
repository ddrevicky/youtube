import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import Subscriptions from './pages/Subscriptions';
import './reset.css';
import './App.css';
import AppLayout from './components/AppLayout';
import SearchResults from './pages/SearchResults';
import { routes } from './utils';
import Explore from './pages/Explore';
import WatchVideo from './pages/WatchVideo';
import Channel from './pages/Channel';

function App() {
  return (
    <AppLayout>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.explore} component={Explore} />
        <Route exact path={routes.subscriptions} component={Subscriptions} />
        <Route exact path={routes.library} component={Library} />
        <Route path="/results/:searchQuery" component={SearchResults} />
        <Route path="/watch/:videoId" component={WatchVideo} />
        <Route path="/channel/:channelId" component={Channel} />
      </Switch>
    </AppLayout>
  );
}

export default App;
