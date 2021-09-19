import { Link } from 'react-router-dom';
import Avatar from '../../common/components/Avatar';
import { ThumbDownIcon, ThumbUpIcon } from '../../common/components/Icons';
import TextPopover from '../../common/components/TextPopover';
import { CommentWrapper, CommentActionWrapper } from './Comment.styles';

function CommentAction({ label = '', icon, isInactiveIcon, popoverText }) {
  return (
    <TextPopover text={popoverText ? popoverText : label} top="2rem">
      <CommentActionWrapper>
        <span className={isInactiveIcon && 'inactive-icon'}>{icon}</span>
        <span className="action-label">{label}</span>
      </CommentActionWrapper>
    </TextPopover>
  );
}

function Comment({ comment }) {
  const { text, datetime, likes, dislikes, channel } = comment;
  const actionIconProps = {
    size: '0.85rem',
  };

  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const likeStatus = ['liked', 'disliked', 'none'][randomNumber];

  return (
    <CommentWrapper>
      <div>
        <Link to={`/channel/${channel.id}`}>
          <Avatar />
        </Link>
      </div>
      <div className="comment-body">
        <div className="name-date">
          <Link to={`/channel/${channel.id}`} className="name">
            {channel.name}
          </Link>
          <span className="date">{datetime.format('MMM D YYYY')}</span>
        </div>
        <div className="text">{text}</div>
        <div className="actions">
          <CommentAction
            label={likes > 0 && likes}
            popoverText="Like"
            icon={<ThumbUpIcon {...actionIconProps} />}
            isInactiveIcon={likeStatus !== 'liked'}
          />
          <CommentAction
            label={dislikes > 0 && dislikes}
            popoverText="Dislike"
            icon={<ThumbDownIcon {...actionIconProps} />}
            isInactiveIcon={likeStatus !== 'disliked'}
          />
        </div>
      </div>
    </CommentWrapper>
  );
}

export default Comment;
