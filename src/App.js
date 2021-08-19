import { Route, Switch } from 'react-router-dom';
import './App.css';
import Channel from './modules/Channel/Channel';
import AppLayout from './modules/common/components/AppLayout';
import Explore from './modules/Explore/Explore';
import Home from './modules/Home/Home';
import Library from './modules/Library/Library';
import SearchResults from './modules/SearchResults/SearchResults';
import Subscriptions from './modules/Subscriptions/Subscriptions';
import WatchVideo from './modules/WatchVideo/WatchVideo';
import './reset.css';
import { routes } from './utils';

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
