import {
  Wrapper,
  MenuItemContainer,
  MenuItemLabelContainer,
  MenuItemIconContainer,
} from './MenuItem.styles';
import StaticTextPopover from './StaticTextPopover';

function MenuItem({ label, icon, isSelected }) {
  return (
    <Wrapper>
      <StaticTextPopover text={label} top="3rem" left="10rem">
        <MenuItemContainer className={isSelected && 'selected'}>
          <MenuItemIconContainer>{icon}</MenuItemIconContainer>
          <MenuItemLabelContainer>{label}</MenuItemLabelContainer>
        </MenuItemContainer>
      </StaticTextPopover>
    </Wrapper>
  );
}

export { MenuItem };
