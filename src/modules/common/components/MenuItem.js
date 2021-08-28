import {
  Wrapper,
  MenuItemContainer,
  MenuItemLabelContainer,
  MenuItemIconContainer,
} from './MenuItem.styles';
import TextPopover from './TextPopover';

function MenuItem({ label, icon, isSelected }) {
  return (
    <Wrapper>
      <TextPopover text={label} top="3rem" left="10rem">
        <MenuItemContainer className={isSelected && 'selected'}>
          <MenuItemIconContainer>{icon}</MenuItemIconContainer>
          <MenuItemLabelContainer>{label}</MenuItemLabelContainer>
        </MenuItemContainer>
      </TextPopover>
    </Wrapper>
  );
}

export { MenuItem };
