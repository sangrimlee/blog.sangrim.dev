import { graphql, useStaticQuery } from 'gatsby';
import { ConfigData } from 'types';

interface ConfigQueryData {
  config: ConfigData;
}

export default function useConfigQuery() {
  const data = useStaticQuery<ConfigQueryData>(configQuery);
  return data.config;
}

const configQuery = graphql`
  query ConfigQuery {
    config: configYaml {
      utterances {
        repository
        label
      }
      countOfInitialPost
    }
  }
`;
