import styled from '@emotion/styled';

const VideoGridContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bodyBackground,
  display: 'grid',
  width: '100%',
  /* TODO: should use rem for column size? */
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gridRowGap: '2rem',
  gridColumnGap: '1rem',
}));

export { VideoGridContainer };
