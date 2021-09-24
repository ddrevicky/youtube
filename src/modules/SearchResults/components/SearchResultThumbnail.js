import { Link } from 'react-router-dom';
import Avatar from '../../common/components/Avatar';
import TextPopover from '../../common/components/TextPopover';
import VideoMeta from '../../common/components/VideoMeta';
import VideoPreview from '../../common/components/VideoPreview';
import { SearchResultContainer } from './SearchResultThumbnail.styles';

function SearchResultThumbnail({ video }) {
  const { title, channel, views, uploadDatetime } = video;
  const uploadDatetimeText = uploadDatetime.format('MMM D YYYY');
  return (
    <Link to={`/watch/${video.id}`}>
      <SearchResultContainer>
        <div style={{ display: 'flex', minWidth: '240px', maxWidth: '360px', width: '100%' }}>
          <VideoPreview video={video} />
        </div>
        <div className="search-flex-col">
          <TextPopover text={title}>
            <h3>{title}</h3>
          </TextPopover>
          <div className="info search-flex-col">
            <VideoMeta views={views} uploadDatetime={uploadDatetime} />
            <Link to={`/channel/${channel.id}`}>
              <div className="channel">
                <Avatar size="24px" />
                <TextPopover text={channel.name} top="-3rem">
                  <span className="channelName">{channel.name}</span>
                </TextPopover>
              </div>
            </Link>
            <TextPopover text="From the video description">
              <p className="description">{video.description}</p>
            </TextPopover>
          </div>
        </div>
      </SearchResultContainer>
    </Link>
  );
}

export default SearchResultThumbnail;
