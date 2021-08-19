import VideoGrid from '../components/VideoGrid';
import { mockVideos } from '../utils';

const videos = mockVideos;

function Home() {
  return <VideoGrid videos={videos} />;
}

export default Home;
