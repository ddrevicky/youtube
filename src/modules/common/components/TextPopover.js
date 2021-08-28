import { PopoverText, PopoverWrapper } from './TextPopover.styles';

function TextPopover({ children, text, top = '-3rem', left = '0rem' }) {
  return (
    <PopoverWrapper>
      <PopoverText top={top} left={left}>
        {text}
      </PopoverText>
      {children}
    </PopoverWrapper>
  );
}

export default TextPopover;
