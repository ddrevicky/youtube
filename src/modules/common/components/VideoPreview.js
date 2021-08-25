import { Wrapper } from './VideoPreview.styles';

const VideoPreview = ({ video }) => {
  return (
    <Wrapper>
      <img className="video-preview" src={video.url} />
    </Wrapper>
  );
};

export default VideoPreview;
