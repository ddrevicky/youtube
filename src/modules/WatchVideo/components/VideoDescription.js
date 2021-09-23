import { Link } from 'react-router-dom';
import { routes } from '../../../utils';
import ActionButton from '../../common/components/ActionButton';
import Avatar from '../../common/components/Avatar';
import { VideoDescriptionWrapper } from './VideoDescription.styles';

function VideoDescription({ video }) {
  const { title, views, uploadDatetime, likes, dislikes, description, channel } = video;
  const subscribeButtonPressed = false;
  const subscribeButtonText = 'SUBSCRIBE';

  return (
    <VideoDescriptionWrapper>
      <div className="channel-row">
        <div className="avatar">
          <Link to={`${routes.channel}/${channel.id}`}>
            <Avatar size="48px" />
          </Link>
        </div>

        <div className="channel-info">
          <div>
            <Link to={`${routes.channel}/${channel.id}`}>
              <span className="channel-name">{channel.name}</span>
            </Link>
          </div>
          <span className="channel-subscribers">10K subscribers</span>
        </div>

        <ActionButton isPressed={subscribeButtonPressed} label={subscribeButtonText} />
      </div>

      <p className="description-text">{description}</p>
    </VideoDescriptionWrapper>
  );
}

export default VideoDescription;
