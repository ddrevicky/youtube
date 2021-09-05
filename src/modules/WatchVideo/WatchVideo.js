import { Wrapper, VideoInfoWrapper, VideoInfoMenuItemWrapper } from './WatchVideo.styles';
import { mockVideos } from '../../utils';
import VideoPlayer from '../common/components/VideoPlayer';
import WatchVideoThumbnail from './components/WatchVideoThumbnail';
import VideoMeta from '../common/components/VideoMeta';
import { MenuItem } from '../common/components/MenuItem';
import { HomeIcon, PlaylistAddIcon, ThumbDownIcon, ThumbUpIcon } from '../common/components/Icons';
import TextPopover from '../common/components/TextPopover';

function VideoInfoMenuItem({ label, icon, popoverText }) {
  return (
    <Wrapper>
      <TextPopover text={popoverText ? popoverText : label} top="2rem" left="1rem">
        <VideoInfoMenuItemWrapper>
          <span>{icon}</span>
          <span>{label}</span>
        </VideoInfoMenuItemWrapper>
        {/* <MenuItemContainer className={isSelected && 'selected'}> */}
        {/* <MenuItemIconContainer>{icon}</MenuItemIconContainer> */}
        {/* <MenuItemLabelContainer>{label}</MenuItemLabelContainer> */}
        {/* </MenuItemContainer> */}
      </TextPopover>
    </Wrapper>
  );
}

function VideoInfo({ video }) {
  const { title, views, uploadDatetime, likes, dislikes, description, channel } = video;
  const actionIconProps = {
    size: '1.25rem',
  };

  const likeStatus = 'liked';
  const inactiveLikeColor = '#555';

  return (
    <VideoInfoWrapper>
      <div className="title-primary video-title">{title}</div>
      <div className="meta-actions">
        <span className="meta">
          <VideoMeta views={views} uploadDatetime={uploadDatetime} />
        </span>
        <div className="actions">
          <VideoInfoMenuItem
            label={likes}
            popoverText="I like this"
            icon={
              <ThumbUpIcon
                {...actionIconProps}
                color={likeStatus !== 'liked' && inactiveLikeColor}
              />
            }
          />
          <VideoInfoMenuItem
            label={dislikes}
            popoverText="I dislike this"
            icon={
              <ThumbDownIcon
                {...actionIconProps}
                color={likeStatus !== 'disliked' && inactiveLikeColor}
              />
            }
          />
          <VideoInfoMenuItem label="Save" icon={<PlaylistAddIcon {...actionIconProps} />} />
        </div>
      </div>
      <div className="divider" />
      <div style={{ display: 'flex' }}></div>
      <div>
        <div>Avatar</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{channel.name}</div>
          <div>10000 Subscribers</div>
          <div>{description}</div>
        </div>
      </div>
    </VideoInfoWrapper>
  );
}

function WatchVideo() {
  const suggestedVideos = mockVideos.slice(0, 10);
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
        src: 'https://vod-progressive.akamaized.net/exp=1629398593~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4327%2F20%2F521635037%2F2436722604.mp4~hmac=be9f402b2753dce86cde3995f2ac3540215b32ec21839327547737ea0cb1e3c3/vimeo-prod-skyfire-std-us/01/4327/20/521635037/2436722604.mp4?filename=Lake+-+67201.mp4',
        type: 'video/mp4',
      },
    ],
  };
  return (
    <Wrapper>
      <div className="video-column">
        <VideoPlayer options={videoJsOptions} />
        <VideoInfo video={currentVideo} />
        <div>Video Description</div>
        <div>Comments</div>
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
