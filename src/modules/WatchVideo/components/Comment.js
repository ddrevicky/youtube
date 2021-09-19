import { Link } from 'react-router-dom';
import Avatar from '../../common/components/Avatar';
import { ThumbDownIcon, ThumbUpIcon } from '../../common/components/Icons';
import { CommentWrapper } from './Comment.styles';

function Comment({ comment }) {
  const { text, datetime, likes, dislikes, channel } = comment;

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
          <ThumbUpIcon /> {likes} <ThumbDownIcon /> {dislikes > 0 && dislikes}
        </div>
      </div>
    </CommentWrapper>
  );
}

export default Comment;
