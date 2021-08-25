import styled from '@emotion/styled';

const Wrapper = styled.div`
  .popover-text {
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.staticPopoverBackground};
    padding: 0.6rem;
    font-size: 0.75rem;
    position: absolute;
    top: -3rem;
    visibility: hidden;
    display: none;
    opacity: 0;
  }

  .popover-wrapper {
    position: relative;
  }
  .popover-wrapper:hover .popover-text {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s;
    display: block;
    /* transition-delay: 1s;  */
  }
`;

export { Wrapper };
