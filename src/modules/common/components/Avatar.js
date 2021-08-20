import { AvatarImg } from './Avatar.styles';

function Avatar({ size = '36px' }) {
  return <AvatarImg size={size} src="http://unsplash.it/36/36?gravity=center?page=1" />;
}

export default Avatar;
