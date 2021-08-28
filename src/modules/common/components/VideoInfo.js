import { Link } from 'react-router-dom';
import TextPopover from './TextPopover';
import { Wrapper } from './VideoInfo.styles';
import VideoMeta from './VideoMeta';

function VideoInfo({ video }) {
  const { title, channel, views, uploadDatetime } = video;
  const uploadDatetimeText = uploadDatetime.format('MMM D YYYY');
  return (
    <Wrapper>
      <div className="info">
        <Link to={`/watch/${video.id}`}>
          <div className="videoTitle">{title}</div>
        </Link>
        <div className="channelNameMeta">
          <Link to={`/channel/${channel.id}`}>
            <TextPopover text={channel.name} top="-3rem">
              <span className="channelName">{channel.name}</span>
            </TextPopover>
          </Link>
          <Link to={`/watch/${video.id}`}>
            <VideoMeta views={views} uploadDatetime={uploadDatetimeText} />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default VideoInfo;
