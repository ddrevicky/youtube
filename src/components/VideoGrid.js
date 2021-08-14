import VideoThumbnail from './VideoThumbnail';
import './VideoGrid.css';

function VideoGrid({ videos }) {
  return (
    <div className="video-grid">
      {videos.map((video, idx) => (
        <VideoThumbnail key={idx} video={video} />
      ))}
    </div>
  );
}

export default VideoGrid;
