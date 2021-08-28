import { Global, css } from '@emotion/react';

const globalStyles = (theme) =>
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
      align-items: center;
    }

    .divider {
      height: 1px;
      background: ${theme.colors.quaternary};
      margin: 0.5rem 0;
      margin-right: 0.3rem;
    }
  `;

export const GlobalStyle = () => {
  return <Global styles={globalStyles} />;
};
