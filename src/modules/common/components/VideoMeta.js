import { Wrapper } from './VideoMeta.styles';

function VideoMeta({ views, uploadDatetime }) {
  const uploadDatetimeText = uploadDatetime.format('MMM D YYYY');
  return (
    <Wrapper>
      <div className="flex-row">
        <span className="views">{views} views</span>
        <span>{uploadDatetimeText}</span>
      </div>
    </Wrapper>
  );
}

export default VideoMeta;
