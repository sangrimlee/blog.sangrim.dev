import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface ProfileProps {
  job: string;
  name: string;
  profileImage: IGatsbyImageData;
}

export default function Profile({ job, name, profileImage }: ProfileProps) {
  return (
    <div>
      <span className="block mb-1 text-lg font-light">{job}</span>
      <h1 className="mb-4 text-2xl font-bold">{name}</h1>
      <GatsbyImage image={profileImage} alt="프로필 이미지" />
    </div>
  );
}
