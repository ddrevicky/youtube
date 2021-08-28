import styled from '@emotion/styled';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.secondary};

  .views::after {
    content: '•';
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
`;

export { Wrapper };
