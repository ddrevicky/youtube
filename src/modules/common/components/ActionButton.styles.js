import styled from '@emotion/styled';

const ActionButtonWrapper = styled.div`
  display: flex;
  background-color: #c00;

  button {
    height: auto;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    background-color: #c00;
  }

  .pressed {
    background-color: ${({ theme }) => theme.colors.quinary};
  }
`;
export { ActionButtonWrapper };
