import { Link } from 'react-router-dom';
import Avatar from '../../common/components/Avatar';
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
            <Link to={`/channel/${video.channel.id}`}>
              <Avatar size="36px" />
            </Link>
            <VideoInfo video={video} />
          </div>
        </div>
      </Wrapper>
    </Link>
  );
}

export default VideoThumbnail;
