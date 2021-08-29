import styled from '@emotion/styled';

const AvatarImg = styled.img`
  width: ${({ theme, size }) => size};
  height: ${({ theme, size }) => size};
  border-radius: 50%;
  cursor: pointer;
`;

export { AvatarImg };
