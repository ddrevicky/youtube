import { VideoCommentsWrapper } from './VideoComments.styles';
import Comment from './Comment';
import { mockComments } from '../../../utils';

function VideoComments() {
  const comments = mockComments;

  return (
    <VideoCommentsWrapper>
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </VideoCommentsWrapper>
  );
}

export default VideoComments;
