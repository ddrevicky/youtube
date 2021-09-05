import { Link } from 'react-router-dom';
import TextPopover from './TextPopover';
import { Wrapper } from './VideoInfo.styles';
import VideoMeta from './VideoMeta';

function VideoInfo({ video }) {
  const { title, channel, views, uploadDatetime } = video;
  return (
    <Wrapper>
      <div className="info">
        <Link to={`/watch/${video.id}`}>
          <div className="title-primary">{title}</div>
        </Link>
        <div className="channelNameMeta">
          <Link to={`/channel/${channel.id}`}>
            <TextPopover text={channel.name} top="-3rem">
              <span className="channelName">{channel.name}</span>
            </TextPopover>
          </Link>
          <Link to={`/watch/${video.id}`}>
            <VideoMeta views={views} uploadDatetime={uploadDatetime} />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default VideoInfo;
