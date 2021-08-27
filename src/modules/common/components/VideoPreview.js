import { Link } from 'react-router-dom';
import { PlaylistPlayIcon, WatchLaterIcon } from './Icons';
import {
  ActionContainer,
  ActionsContainer,
  DurationContainer,
  Image,
  Wrapper,
} from './VideoPreview.styles';

const VideoPreview = ({ video }) => {
  return (
    <Wrapper>
      <Link to={`/watch/${video.id}`}>
        <Image src={video.url} />
      </Link>
      <ActionsContainer>
        <ActionContainer>
          <WatchLaterIcon />
        </ActionContainer>
        <ActionContainer>
          <PlaylistPlayIcon />
        </ActionContainer>
      </ActionsContainer>
      <DurationContainer>1:25</DurationContainer>
    </Wrapper>
  );
};

export default VideoPreview;
