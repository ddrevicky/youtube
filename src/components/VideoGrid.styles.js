import styled from '@emotion/styled';

const VideoGridContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bodyBackground,
  display: 'grid',
  /* TODO: should use rem for column size? */
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gridGap: '1rem',
}));

export { VideoGridContainer };
