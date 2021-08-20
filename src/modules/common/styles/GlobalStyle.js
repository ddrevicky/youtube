import { Global, css } from '@emotion/react';

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        a {
          text-decoration: none;
          color: inherit;
        }

        .flex-row {
          display: flex;
        }
      `}
    />
  );
};
