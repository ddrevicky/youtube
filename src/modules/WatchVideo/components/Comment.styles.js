import styled from '@emotion/styled';

const CommentWrapper = styled.div`
  display: flex;
  gap: 0.75rem;

  .comment-body {
    width: 100%;
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
    line-height: 1.25rem;
  }

  .actions {
    margin-top: 0.25rem;
    display: flex;
    justify-content: flex-start;
    gap: 1.25rem;
    font-size: 0.8rem;
  }
`;

const CommentActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  cursor: pointer;

  .action-label {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .inactive-icon {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export { CommentWrapper, CommentActionWrapper };
