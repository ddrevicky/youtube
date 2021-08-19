import VideoGrid from '../components/VideoGrid';
import { dummyVideos } from '../utils';

const videos = dummyVideos;

function Home() {
  return <VideoGrid videos={videos} />;
}

export default Home;
