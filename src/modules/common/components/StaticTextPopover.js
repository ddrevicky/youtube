import { Wrapper } from './StaticTextPopover.styles';

function StaticTextPopover({ children, text, top = '-3rem', right = '0rem' }) {
  return (
    <Wrapper top={top} right={right}>
      <div className="popover-wrapper">
        <div className="popover-text">{text}</div>
        {children}
      </div>
    </Wrapper>
  );
}

export default StaticTextPopover;
