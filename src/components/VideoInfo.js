import { Link } from 'react-router-dom';
import { Wrapper } from './VideoInfo.styles';

export function VideoInfo({ video }) {
  const uploadDatetime = video.uploadDatetime.format('MMM D YYYY');
  return (
    <Wrapper>
      <div className="info">
        <div className="videoTitle">{video.title}</div>
        <div className="channelNameMeta">
          <Link to={`/channel/${video.channel.id}`}>
            <div className="channelName">{video.channel.name}</div>
          </Link>
          <div className="meta">
            <span className="views">{video.views}</span>
            <span>{uploadDatetime}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
