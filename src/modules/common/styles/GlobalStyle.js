import { Global, css } from '@emotion/react';

const globalStyles = (theme) =>
  console.log(theme) ||
  css`
    body {
      color: ${theme.colors.primary};
      font-size: 1rem;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .flex-row {
      display: flex;
    }

    .divider {
      height: 1px;
      background: ${theme.colors.quaternary};
      margin: 1rem 0;
      margin-right: 0.3rem;
    }
  `;

export const GlobalStyle = () => {
  return <Global styles={globalStyles} />;
};
