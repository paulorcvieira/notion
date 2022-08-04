import { ImgHTMLAttributes } from "react";

import { AvatarImg } from './styles';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  small?: boolean
}

export function Avatar({
  hasBorder = false,
  small = false,
  ...props
}: AvatarProps) {
  return (
    <AvatarImg
      hasBorder={hasBorder}
      small={small}
      {...props}
    />
  );
}
