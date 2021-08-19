import VideoThumbnail from './VideoThumbnail';
import { VideoGridContainer } from './VideoGrid.styles';

function VideoGrid({ videos }) {
  return (
    <VideoGridContainer>
      {videos.map((video, idx) => (
        <VideoThumbnail key={idx} video={video} />
      ))}
    </VideoGridContainer>
  );
}

export default VideoGrid;
