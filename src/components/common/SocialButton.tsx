import React from 'react';
import SVGIcon from './SVGIcon';
import { SOCIAL_INFO } from 'constants/social';

interface SocialButtonProps {
  social: string;
  username: string;
}

export default function SocialButton({ social, username }: SocialButtonProps) {
  return (
    <a
      href={SOCIAL_INFO[social].url(username)}
      aria-label={`${social}로 이동`}
      target="_blank"
      style={{
        backgroundColor: SOCIAL_INFO[social].color,
      }}
      className="w-12 h-12 rounded-full box-content inline-flex items-center justify-center text-white border-2 border-custom-50 dark:border-custom-800"
    >
      <SVGIcon icon={SOCIAL_INFO[social].icon} size={24} />
    </a>
  );
}
