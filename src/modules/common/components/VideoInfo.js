import { Link } from 'react-router-dom';
import StaticTextPopover from './StaticTextPopover';
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
            <StaticTextPopover text={channel.name} top="-3rem">
              <div className="channelName">{channel.name}</div>
            </StaticTextPopover>
          </Link>
          <VideoMeta views={views} uploadDatetime={uploadDatetimeText} />
        </div>
      </div>
    </Wrapper>
  );
}

export default VideoInfo;
