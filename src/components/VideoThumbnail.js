import styles from './VideoThumbnail.css';

function VideoThumbnail({ video }) {
  return (
    <div className="thumbnail">
      <img className="video-preview" src={video.url} />
      <div className="thumbnail__bottom">
        <img className="thumbnail__channel-avatar" src="http://unsplash.it/36/36?gravity=center" />
        <div className="thumbnail__info">
          <div className="thumbnail__video-title">The Very Best of Mythic Quest</div>
          <div className="thumbnail__channel-name-meta">
            <div className="thumbnail__channel-name">Favorite Sitcoms</div>
            <div className="thumbnail__meta">
              <span className="thumbnail__views">1.7M views</span>
              <span>4 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoThumbnail;
