import styles from './VideoThumbnail.css';

function VideoThumbnail({ video }) {
  return (
    <div className="thumbnail">
      <img className="video-preview" src={video.url} />
      <div className="thumbnail__bottom">
        <img className="thumbnail__channel-avatar" src="http://unsplash.it/36/36?gravity=center" />
        <div className="thumbnail__info">
          <div className="thumbnail__video-title">{video.title}</div>
          <div className="thumbnail__channel-name-meta">
            <div className="thumbnail__channel-name">{video.channelName}</div>
            <div className="thumbnail__meta">
              <span className="thumbnail__views">{video.views}</span>
              <span>4 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoThumbnail;
