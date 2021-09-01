import styled from '@emotion/styled';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.menuBackground};
  font-family: ${({ theme }) => theme.font};
`;

const BodyContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.bodyBackground};
  padding-top: ${({ theme }) => theme.paddings.section};
  padding-left: ${({ theme }) => theme.paddings.section};
`;

export { Wrapper, BodyContainer, ContentContainer };
