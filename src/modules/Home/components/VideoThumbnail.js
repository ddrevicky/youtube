import { Link } from 'react-router-dom';
import VideoInfo from '../../common/components/VideoInfo';
import VideoPreview from '../../common/components/VideoPreview';
import { Wrapper } from './VideoThumbnail.styles';

function VideoThumbnail({ video }) {
  return (
    <Link to={`/watch/${video.id}`}>
      <Wrapper>
        <div className="thumbnail">
          <VideoPreview video={video} />
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
