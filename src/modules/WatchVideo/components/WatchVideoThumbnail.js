import VideoInfo from '../../common/components/VideoInfo';
import VideoPreview from '../../common/components/VideoPreview';
import { Wrapper } from './WatchVideoThumbnail.styles';

function WatchVideoThumbnail({ video }) {
  return (
    <Wrapper>
      <VideoPreview video={video} />
      <VideoInfo video={video} />
    </Wrapper>
  );
}

export default WatchVideoThumbnail;
