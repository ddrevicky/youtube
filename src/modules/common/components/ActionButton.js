import { ActionButtonWrapper } from './ActionButton.styles';

function ActionButton({ label, isPressed }) {
  return (
    <ActionButtonWrapper>
      <button className={isPressed && 'pressed'}>{label}</button>
    </ActionButtonWrapper>
  );
}

export default ActionButton;
