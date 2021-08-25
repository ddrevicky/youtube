import { Wrapper } from './StaticTextPopover.styles';

function StaticTextPopover({ children, text }) {
  return (
    <Wrapper>
      <div className="popover-wrapper">
        <div className="popover-text">{text}</div>
        {children}
      </div>
    </Wrapper>
  );
}

export default StaticTextPopover;
