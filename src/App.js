import VideoGrid from './components/VideoGrid';
import './reset.css';

const videos = [
  { title: 'Rick and Morty', channel: 'Swimpedia', views: 122 },
  { title: 'Rick and Morty', channel: 'Swimpedia', views: 122 },
  { title: 'Rick and Morty', channel: 'Swimpedia', views: 122 },
  { title: 'Rick and Morty', channel: 'Swimpedia', views: 122 },
  { title: 'Rick and Morty', channel: 'Swimpedia', views: 122 },
  { title: 'Rick and Morty', channel: 'Swimpedia', views: 122 },
  { title: 'Rick and Morty', channel: 'Swimpedia', views: 122 },
  { title: 'Rick and Morty', channel: 'Swimpedia', views: 122 },
  { title: 'Rick and Morty', channel: 'Swimpedia', views: 122 },
  { title: 'Rick and Morty', channel: 'Swimpedia', views: 122 },
];

function App() {
  return <VideoGrid videos={videos} />;
}

export default App;
