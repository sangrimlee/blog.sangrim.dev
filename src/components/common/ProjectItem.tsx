import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ProjectData } from 'types';
import SVGIcon from './SVGIcon';

interface ProjectProps {
  project: ProjectData;
}

export default function ProjectItem({
  project: { name, description, url, repository, thumbnail },
}: ProjectProps) {
  return (
    <div className="project-item">
      <div className="project-img-wrap">
        <GatsbyImage
          image={thumbnail.childImageSharp.gatsbyImageData}
          alt={`${name} thumbnail`}
          className="project-img"
        />
      </div>
      <div className="project-detail-wrap">
        <div>
          <h2 className="project-name">{name}</h2>
          <p className="project-description">{description}</p>
        </div>
        <ul className="project-link-list">
          <li>
            <a href={repository} className="project-link">
              <SVGIcon icon="LinkIcon" size={32} />
            </a>
          </li>
          <li>
            <a href={url} className="project-link">
              <SVGIcon icon="GithubIcon" size={32} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
