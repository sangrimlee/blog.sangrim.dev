import React from 'react';
import * as Icon from 'assets/svg';
import { IconType } from 'types';

interface SVGIconProps {
  icon: IconType;
  className?: string;
  size?: number;
  width?: number | string;
  height?: number | string;
}

export default function SVGIcon({
  icon,
  className,
  width,
  height,
  size = 16,
}: SVGIconProps) {
  const SVGComponent = Icon[icon];

  return (
    <SVGComponent
      height={height ?? size}
      width={width ?? size}
      className={className}
    />
  );
}
