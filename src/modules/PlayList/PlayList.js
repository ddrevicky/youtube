import { useParams } from 'react-router-dom';

function PlayList() {
  const { playListId } = useParams();

  return <div>PlayList + {playListId}</div>;
}

export default PlayList;
