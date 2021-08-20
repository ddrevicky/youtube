import { Link } from 'react-router-dom';
import { Wrapper } from './VideoInfo.styles';
import VideoMeta from './VideoMeta';

function VideoInfo({ video }) {
  const { title, channel, views, uploadDatetime } = video;
  const uploadDatetimeText = uploadDatetime.format('MMM D YYYY');
  return (
    <Wrapper>
      <div className="info">
        <div className="videoTitle">{title}</div>
        <div className="channelNameMeta">
          <Link to={`/channel/${channel.id}`}>
            <div className="channelName">{channel.name}</div>
          </Link>
          <VideoMeta views={views} uploadDatetime={uploadDatetimeText} />
        </div>
      </div>
    </Wrapper>
  );
}

export default VideoInfo;
