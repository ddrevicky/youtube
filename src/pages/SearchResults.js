import { SearchResultsContainer } from './SearchResults.styles';

function SearchResults() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <SearchResultsContainer> RESULTS </SearchResultsContainer>;
    </div>
  );
}

export default SearchResults;

// TODO:
// flex-row  (filters, videolist)
// flex-column (video list)
// flex-row: VideoPreview VideoDescription
