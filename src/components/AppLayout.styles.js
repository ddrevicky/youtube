import styled from '@emotion/styled';

const AppContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.menuBackground,
  display: 'flex',
  flexDirection: 'column',
}));

const BodyContainer = styled.body(({ theme }) => ({
  backgroundColor: theme.colors.menuBackground,
  display: 'flex',
}));

const ContentContainer = styled.body(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
}));

export { AppContainer, BodyContainer, ContentContainer };
