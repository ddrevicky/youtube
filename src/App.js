import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Library from './pages/Library';
import Subscriptions from './pages/Subscriptions';
import './reset.css';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/feed/trending" component={Trending} />
        <Route exact path="/feed/library" component={Library} />
        <Route exact path="/feed/subscriptions" component={Subscriptions} />
        {/* TODO: Add routes */}
      </Switch>
    </>
  );
}

export default App;
