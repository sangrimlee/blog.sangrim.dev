import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PAGE_URL } from 'constants/url';
import useProfileQuery from 'hooks/useProfileQuery';

export default function Bio() {
  const { name, job, short, profileImage } = useProfileQuery();

  return (
    <section className="mb-10">
      <div className="bio">
        <div className="bio-img">
          <GatsbyImage
            image={profileImage.childImageSharp.gatsbyImageData}
            alt="프로필이미지"
          />
          <div className="bio-badge-wrap">
            <span className="bio-badge">👋</span>
          </div>
        </div>
        <div className="bio-content">
          <span>{job}</span>
          <Link to={PAGE_URL.ABOUT}>{name}</Link>
          <p>{short}</p>
        </div>
      </div>
    </section>
  );
}
