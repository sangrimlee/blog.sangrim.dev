import React, { useMemo } from 'react';
import { SocialData } from 'types';
import SocialButton from './SocialButton';
import { SOCIAL_ORDER } from 'constants/social';

interface ContactProps {
  social: SocialData;
}

export default function Contact({ social }: ContactProps) {
  const socialInfo = useMemo(
    () =>
      Object.entries(social).sort(
        ([a], [b]) => SOCIAL_ORDER.indexOf(a) - SOCIAL_ORDER.indexOf(b),
      ),
    [social],
  );

  return (
    <div>
      <ul className="flex">
        {socialInfo.map(
          ([social, username]) =>
            username && (
              <li key={social} className=" -mr-3 last:mr-0">
                <SocialButton social={social} username={username} />
              </li>
            ),
        )}
      </ul>
    </div>
  );
}
