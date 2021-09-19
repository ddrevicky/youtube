import { Link } from 'react-router-dom';
import { routes } from '../../../utils';
import ActionButton from '../../common/components/ActionButton';
import Avatar from '../../common/components/Avatar';
import { VideoDescriptionWrapper } from './VideoDescription.styles';

function VideoDescription({ video }) {
  const { title, views, uploadDatetime, likes, dislikes, description, channel } = video;

  return (
    <VideoDescriptionWrapper>
      <div className="avatar-description">
        <div>
          <Link to={`${routes.channel}/${channel.id}`}>
            <Avatar />
          </Link>
        </div>
        <div className="description-column">
          <div>
            <Link to={`${routes.channel}/${channel.id}`}>
              <span className="channel-name">{channel.name}</span>
            </Link>
          </div>
          <span className="channel-subscribers">10K subscribers</span>

          <p className="description-text">{description}</p>
        </div>
      </div>
      <ActionButton label="SUBSCRIBED" />
    </VideoDescriptionWrapper>
  );
}

export default VideoDescription;
