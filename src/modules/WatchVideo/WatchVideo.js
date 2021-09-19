import {
  Wrapper,
  VideoInfoWrapper,
  VideoInfoMenuItemWrapper,
  VideoDescriptionWrapper,
  VideoCommentsWrapper,
} from './WatchVideo.styles';
import { mockComments, mockVideos, routes } from '../../utils';
import VideoPlayer from '../common/components/VideoPlayer';
import WatchVideoThumbnail from './components/WatchVideoThumbnail';
import Comment from './components/Comment';
import VideoMeta from '../common/components/VideoMeta';
import { PlaylistAddIcon, ThumbDownIcon, ThumbUpIcon } from '../common/components/Icons';
import TextPopover from '../common/components/TextPopover';
import Avatar from '../common/components/Avatar';
import { Link } from 'react-router-dom';

function VideoInfoMenuItem({ label, icon, isInactiveIcon, popoverText }) {
  return (
    <TextPopover text={popoverText ? popoverText : label} top="2rem" left="1rem">
      <VideoInfoMenuItemWrapper>
        <span className={isInactiveIcon && 'inactive-icon'}>{icon}</span>
        <span>{label}</span>
      </VideoInfoMenuItemWrapper>
    </TextPopover>
  );
}

function VideoInfo({ video }) {
  const { title, views, uploadDatetime, likes, dislikes, description, channel } = video;
  const actionIconProps = {
    size: '1.25rem',
  };

  const likeStatus = 'liked';

  return (
    <VideoInfoWrapper>
      <h1 className="title-primary video-title">{title}</h1>
      <div className="meta-actions">
        <span className="meta">
          <VideoMeta views={views} uploadDatetime={uploadDatetime} />
        </span>
        <div className="actions">
          <VideoInfoMenuItem
            label={likes}
            popoverText="I like this"
            icon={<ThumbUpIcon {...actionIconProps} />}
            isInactiveIcon={likeStatus !== 'liked'}
          />
          <VideoInfoMenuItem
            label={dislikes}
            popoverText="I dislike this"
            icon={<ThumbDownIcon {...actionIconProps} />}
            isInactiveIcon={likeStatus !== 'disliked'}
          />
          <VideoInfoMenuItem label="Save" icon={<PlaylistAddIcon {...actionIconProps} />} />
        </div>
      </div>
    </VideoInfoWrapper>
  );
}

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
          <Link to={`${routes.channel}/${channel.id}`}>
            <span className="channel-name">{channel.name}</span>
          </Link>
          <span className="channel-subscribers">10K subscribers</span>
          <p className="description-text">{description}</p>
        </div>
      </div>
      <button>SUBSCRIBED</button>
    </VideoDescriptionWrapper>
  );
}

function VideoComments() {
  const comments = mockComments;
  return (
    <VideoCommentsWrapper>
      {mockComments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </VideoCommentsWrapper>
  );
}

function WatchVideo() {
  const suggestedVideos = mockVideos;
  const currentVideo = mockVideos[0];

  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    width: 853,
    height: 480,
    // videoWidth: 853,
    // videoHeight: 480,
    // currentWidth: 853,
    sources: [
      {
        // https://pixabay.com/videos/lake-houses-hill-mountain-boat-67201/
        src: 'https://vod-progressive.akamaized.net/exp=1632086098~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4327%2F20%2F521635037%2F2436722627.mp4~hmac=808f492a091e0ec71db8c856b269447e58171cfaf6155990506cf33a3155a519/vimeo-prod-skyfire-std-us/01/4327/20/521635037/2436722627.mp4?filename=Lake+-+67201.mp4',
        type: 'video/mp4',
      },
    ],
  };
  return (
    <Wrapper>
      <div className="video-column">
        <VideoPlayer options={videoJsOptions} />
        <VideoInfo video={currentVideo} />
        <div className="divider" />
        <VideoDescription video={currentVideo} />
        <div className="divider" />
        <VideoComments />
      </div>
      <div className="suggested-videos">
        {suggestedVideos.map((video, idx) => (
          <WatchVideoThumbnail video={video} key={idx} />
        ))}
      </div>
    </Wrapper>
  );
}

export default WatchVideo;
