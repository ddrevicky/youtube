import { useParams } from 'react-router-dom';
import { mockVideos } from '../../utils';
import SearchResultThumbnail from './components/SearchResultThumbnail';
import { SearchResultsContainer } from './SearchResults.styles';

function SearchResults() {
  const { searchQuery } = useParams();
  const resultVideos = mockVideos.slice(0, 6);
  return (
    <SearchResultsContainer>
      <div className="divider" />
      {resultVideos.map((video, idx) => (
        <SearchResultThumbnail video={video} key={idx} />
      ))}
    </SearchResultsContainer>
  );
}

export default SearchResults;
