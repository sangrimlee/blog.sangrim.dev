import React from 'react';
import { SkillData } from 'types';
import { GatsbyImage } from 'gatsby-plugin-image';

interface SkillStacksProps {
  skills: SkillData[];
}

export default function SkillStacks({ skills }: SkillStacksProps) {
  return (
    <div>
      <h1 className="title">기술 스택</h1>
      <ul className="flex flex-wrap">
        {skills.map(
          ({
            name,
            image: {
              childImageSharp: { gatsbyImageData },
            },
          }) => (
            <li
              className="rounded-full overflow-hidden mr-4 mb-4 last:mr-0"
              key={name}
            >
              <GatsbyImage
                image={gatsbyImageData}
                alt={name}
                className="h-32 w-32 object-contain clip-circle"
              />
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
