import styled from '@emotion/styled';

const CommentWrapper = styled.div`
  display: flex;
  gap: 0.75rem;

  .comment-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .name-date {
    display: flex;
    gap: 0.4rem;
    font-size: 0.8rem;
  }

  .name {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  .date {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .text {
    font-size: 0.9rem;
  }

  .actions {
    margin-top: 0.25rem;
    display: flex;
    gap: 1rem;
    font-size: 0.8rem;
  }
`;

export { CommentWrapper };
