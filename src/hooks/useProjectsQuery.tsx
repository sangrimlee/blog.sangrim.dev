import { graphql, useStaticQuery } from 'gatsby';
import { ProjectData } from 'types';

interface ProjectsQueryData {
  projects: {
    nodes: ProjectData[];
  };
}

export default function useProjectsQuery() {
  const { projects } = useStaticQuery<ProjectsQueryData>(projectsQuery);
  return projects.nodes;
}

export const projectsQuery = graphql`
  query ProjectsQuery {
    projects: allProjectsYaml {
      nodes {
        id
        name
        repository
        url
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
        description
      }
    }
  }
`;
