import { IconContainer, ItemContainer, LabelContainer, Wrapper } from './MenuItemMini.styles';
import TextPopover from './TextPopover';

// TODO: import TextPopover from './TextPopover';
function MenuItemMini({ label, icon, isSelected }) {
  return (
    <Wrapper>
      <TextPopover text={label} top="3rem" left="5rem">
        <ItemContainer className={isSelected && 'selected'}>
          <IconContainer>{icon}</IconContainer>
          <LabelContainer>{label}</LabelContainer>
        </ItemContainer>
      </TextPopover>
    </Wrapper>
  );
}

export default MenuItemMini;
