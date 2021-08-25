import styled from '@emotion/styled';

const Wrapper = styled.div`
  .popover-text {
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.staticPopoverBackground};
    padding: 0.6rem;
    font-size: 0.75rem;
    /* max-width: 40rem; */
    position: absolute;
    top: -3rem;
    /* top: ${(props) => props.top};
    right: ${(props) => props.right}; */
    visibility: hidden;
    opacity: 0;
    z-index: 10;
  }

  .popover-wrapper {
    position: relative;
  }
  .popover-wrapper:hover .popover-text {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s;
  }
`;

export { Wrapper };
