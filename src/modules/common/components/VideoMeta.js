import { Wrapper } from './VideoInfo.styles';

function VideoMeta({ views, uploadDatetime }) {
  return (
    <Wrapper>
      <div className="flex-row">
        <span className="views">{views}</span>
        <span>{uploadDatetime}</span>
      </div>
    </Wrapper>
  );
}

export default VideoMeta;
