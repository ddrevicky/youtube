import styled from '@emotion/styled';

const ActionButtonWrapper = styled.div`
  display: flex;

  button {
    cursor: pointer;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    background-color: #c00;
    padding: 0.5rem 1rem;
  }

  .pressed {
    background-color: ${({ theme }) => theme.colors.quinary};
  }
`;
export { ActionButtonWrapper };
