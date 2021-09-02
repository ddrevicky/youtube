import styled from '@emotion/styled';

const Wrapper = styled.div`
  .row {
    display: flex;
    gap: ${({ theme }) => theme.paddings.section};
  }

  .videoCol {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .suggestedCol {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 0;
    gap: 0.5rem;
  }
`;

export { Wrapper };
