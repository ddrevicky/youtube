import VideoThumbnail from './VideoThumbnail';
import './VideoGrid.css';

const VideoGrid = ({ videos }) => {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoThumbnail video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
