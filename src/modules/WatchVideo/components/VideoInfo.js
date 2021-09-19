import { PlaylistAddIcon, ThumbDownIcon, ThumbUpIcon } from '../../common/components/Icons';
import TextPopover from '../../common/components/TextPopover';
import VideoMeta from '../../common/components/VideoMeta';
import { VideoInfoActionWrapper, VideoInfoWrapper } from './VideoInfo.styles';

function VideoInfoAction({ label, icon, isInactiveIcon, popoverText }) {
  return (
    <TextPopover text={popoverText ? popoverText : label} top="2rem" left="1rem">
      <VideoInfoActionWrapper>
        <span className={isInactiveIcon && 'inactive-icon'}>{icon}</span>
        <span>{label}</span>
      </VideoInfoActionWrapper>
    </TextPopover>
  );
}

function VideoInfo({ video }) {
  const { title, views, uploadDatetime, likes, dislikes, description, channel } = video;
  // TODO: can size be specified in css?
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
          <VideoInfoAction
            label={likes}
            popoverText="I like this"
            icon={<ThumbUpIcon {...actionIconProps} />}
            isInactiveIcon={likeStatus !== 'liked'}
          />
          <VideoInfoAction
            label={dislikes}
            popoverText="I dislike this"
            icon={<ThumbDownIcon {...actionIconProps} />}
            isInactiveIcon={likeStatus !== 'disliked'}
          />
          <VideoInfoAction label="Save" icon={<PlaylistAddIcon {...actionIconProps} />} />
        </div>
      </div>
    </VideoInfoWrapper>
  );
}

export default VideoInfo;
