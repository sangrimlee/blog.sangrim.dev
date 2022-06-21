import React from 'react';
import SVGIcon from './SVGIcon';
import { IconType } from 'types';

interface ShareButtonProps {
  icon: IconType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ShareButton({ icon, onClick }: ShareButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-custom-100 text-custom-700 transition-colors hover:bg-custom-700 hover:text-white dark:bg-custom-700 dark:text-white dark:hover:bg-custom-100 hover:dark:text-custom-700"
    >
      <SVGIcon icon={icon} size={18} />
    </button>
  );
}
