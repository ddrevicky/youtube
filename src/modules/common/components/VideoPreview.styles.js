import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: relative;

  .video-preview {
    width: 100%;
    height: 100%;
  }
`;

const ActionContainer = styled.div`
  /* visibility: hidden; */
  background: rgba(0, 0, 0, 0.8);
  padding: 0.2rem;

  &:hover {
    /* visibility: visible; */
  }
`;

const ActionsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  top: 0.25rem;
  right: 0.25rem;
`;

const DurationContainer = styled.span`
  color: white;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
  padding: 0.2rem;
  font-size: 0.85rem;
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export { Wrapper, ActionContainer, ActionsContainer, DurationContainer };
