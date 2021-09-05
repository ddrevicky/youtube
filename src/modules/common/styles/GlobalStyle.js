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

    .title-primary {
      color: ${theme.colors.primary};
      font-weight: 500;
      line-height: 1.25rem;

      /* TODO: utility class for line clamping */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `;

export const GlobalStyle = () => {
  return <Global styles={globalStyles} />;
};
