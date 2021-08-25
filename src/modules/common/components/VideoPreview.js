import { PlaylistPlayIcon, WatchLaterIcon } from './Icons';
import {
  ActionContainer,
  ActionsContainer,
  DurationContainer,
  Wrapper,
} from './VideoPreview.styles';

const VideoPreview = ({ video }) => {
  return (
    <Wrapper>
      <img className="video-preview" src={video.url} />
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
