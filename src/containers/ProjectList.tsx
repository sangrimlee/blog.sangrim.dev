import React from 'react';
import useProjectsQuery from 'hooks/useProjectsQuery';
import ProjectItem from 'components/common/ProjectItem';

export default function ProjectList() {
  const projects = useProjectsQuery();

  return (
    <div>
      <h1 className="title">프로젝트</h1>
      <ul className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
