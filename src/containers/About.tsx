import React from 'react';
import useProfileQuery from 'hooks/useProfileQuery';
import { Profile, SkillStacks, Introduction, Contact } from 'components/common';
import ProjectList from './ProjectList';

export default function About() {
  const { name, job, profileImage, skills, social, introduction } =
    useProfileQuery();

  return (
    <div className="flex flex-col xl:flex-row">
      <div className="xl:w-1/4">
        <section className="mb-10 xl:mb-0">
          <div className="mb-4">
            <Profile
              name={name}
              job={job}
              profileImage={profileImage.childImageSharp.gatsbyImageData}
            />
          </div>
          <div>
            <Contact social={social} />
          </div>
        </section>
      </div>
      <div className="xl:w-3/4 xl:pl-10">
        <section className="mb-10">
          <Introduction introduction={introduction} />
        </section>
        <section className="mb-10">
          <SkillStacks skills={skills} />
        </section>
        <section className="mb-10">
          <ProjectList />
        </section>
      </div>
    </div>
  );
}
