import { useParams } from 'react-router-dom';
import { SearchResultsContainer } from './SearchResults.styles';

function SearchResults() {
  const { searchQuery } = useParams();
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <SearchResultsContainer> {searchQuery} </SearchResultsContainer>;
    </div>
  );
}

export default SearchResults;

// TODO:
// flex-row  (filters, videolist)
// flex-column (video list)
// flex-row: VideoPreview VideoDescription
