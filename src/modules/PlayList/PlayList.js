import { useParams } from 'react-router-dom';
import { PlayListWrapper } from './PlayList.styles';
import Avatar from '../common/components/Avatar';

function PlayList() {
  const { playListId } = useParams();
  const playListName = 'My Awesome Playlist';
  const authorName = 'Frank Jackson';

  return (
    <PlayListWrapper>
      <div className="description-column">
        <img src={`https://picsum.photos/312/200?random=${Math.floor(Math.random() * 100) + 1}`} />
        <h1>{playListName}</h1>
        <div className="stats">
          <span className="dot-after">51 videos</span>
          <span className="dot-after">No views</span>
          <span>Last Updated</span>
        </div>
        <div className="divider" />
        <div className="author">
          <Avatar size="48px" />
          {authorName}
        </div>
      </div>
      <span>PlayList + {playListId} </span>
    </PlayListWrapper>
  );
}

export default PlayList;
