import { Link } from 'react-router-dom';
import { VideoInfo } from './VideoInfo';
import { Wrapper } from './VideoThumbnail.styles';

function VideoThumbnail({ video }) {
  return (
    <Link to={`/watch/${video.id}`}>
      <Wrapper>
        <div className="thumbnail">
          <img className="videoPreview" src={video.url} />
          <div className="bottomSection">
            <img className="channelAvatar" src="http://unsplash.it/36/36?gravity=center?page=1" />
            <VideoInfo video={video} />
          </div>
        </div>
      </Wrapper>
    </Link>
  );
}

export default VideoThumbnail;
