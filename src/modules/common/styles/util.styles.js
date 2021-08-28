import styled from '@emotion/styled/macro';

// TODO: How can this be used?
const TextLineClamp = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: ${({ maxLines }) => maxLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { TextLineClamp };
