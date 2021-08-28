import styled from '@emotion/styled/macro';

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ActionContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 0.2rem;

  &:hover {
    background: black;
  }
`;

const ActionsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  top: 0.25rem;
  right: 0.25rem;
  visibility: hidden;
`;

const DurationContainer = styled.span`
  color: white;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
  padding: 0.2rem;
  font-size: 0.85rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const Wrapper = styled.div`
  position: relative;
  &:hover ${ActionsContainer} {
    visibility: visible;
  }
`;

export { Wrapper, Image, ActionContainer, ActionsContainer, DurationContainer };
