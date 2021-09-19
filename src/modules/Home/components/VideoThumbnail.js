import { Link } from 'react-router-dom';
import Avatar from '../../common/components/Avatar';
import VideoInfo from '../../common/components/VideoInfo';
import VideoPreview from '../../common/components/VideoPreview';
import { Wrapper } from './VideoThumbnail.styles';

function VideoThumbnail({ video }) {
  return (
    <Wrapper>
      <div className="thumbnail">
        <VideoPreview video={video} />
        <div className="bottomSection">
          <div>
            <Link to={`/channel/${video.channel.id}`}>
              <Avatar size="36px" />
            </Link>
          </div>
          <VideoInfo video={video} />
        </div>
      </div>
    </Wrapper>
  );
}

export default VideoThumbnail;
