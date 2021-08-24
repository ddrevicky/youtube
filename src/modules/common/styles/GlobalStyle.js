import { Global, css } from '@emotion/react';

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        body {
          color: ${(props) => props.theme.colors.primary};
          font-size: 1rem;
        }

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
