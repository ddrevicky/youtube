import { AvatarImg } from './Avatar.styles';

function Avatar({ size = '36px' }) {
  const avatarSrc = `https://picsum.photos/50/50?random=${Math.floor(Math.random() * 100) + 1}`;
  return <AvatarImg size={size} src={avatarSrc} />;
}

export default Avatar;
