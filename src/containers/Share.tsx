import React from 'react';
import useConfigQuery from 'hooks/useConfigQuery';
import useSiteMetadataQuery from 'hooks/useSiteMetadataQuery';
import { ShareButton } from 'components/common';
import {
  copyToClipboard,
  shareByFacebook,
  shareByLinkedIn,
  shareByTwitter,
} from 'utils/share';

interface ShareProps {
  slug: string;
}

export default function Share({ slug }: ShareProps) {
  const { siteUrl } = useSiteMetadataQuery();
  const { facebookAppId } = useConfigQuery();
  const url = new URL(slug, siteUrl).toString();

  return (
    <div className="mb-8">
      <strong className="mb-2 block text-right">공유하기</strong>
      <ul className="flex items-center justify-end gap-x-2">
        <li>
          <ShareButton
            icon="FacebookIcon"
            onClick={() => shareByFacebook(url, facebookAppId)}
          />
        </li>
        <li>
          <ShareButton icon="TwitterIcon" onClick={() => shareByTwitter(url)} />
        </li>
        <li>
          <ShareButton
            icon="LinkedInIcon"
            onClick={() => shareByLinkedIn(url)}
          />
        </li>
        <li>
          <ShareButton
            icon="LinkIcon"
            onClick={async () => await copyToClipboard(url)}
          />
        </li>
      </ul>
    </div>
  );
}
