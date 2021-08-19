import { useParams } from 'react-router-dom';
import { mockVideos } from '../../utils';
import { Wrapper } from './Channel.styles';

function Channel() {
  const { channelId } = useParams();

  const channel = {
    id: channelId,
    name: 'Sitcom Radio Channel',
    avatarUrl: 'http://unsplash.it/36/36?gravity=center?page=1',
    videos: mockVideos.slice(0, 10),
  };

  return (
    <Wrapper>
      <div>Channel Home channelId={channelId}</div>
    </Wrapper>
  );
}

export default Channel;
