import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { createContext, useContext } from 'react';

import getRequest from '../api/requests/getRequest';
import { IProjectNames } from '../api/types';

interface IProjectNamesContext
  extends Pick<UseQueryResult, 'data' | 'isLoading' | 'isError' | 'error'> {}

interface IProjectNamesProviderProps {
  children: React.ReactNode;
}

const ProjectNamesContext = createContext<IProjectNamesContext>({
  data: [],
  isLoading: false,
  isError: false,
  error: null,
});

export const useProjectNames = () => {
  return useContext(ProjectNamesContext);
};

export const ProjectNamesProvider: React.FC<IProjectNamesProviderProps> = (
  props,
) => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['projectNames'],
    queryFn: () => getRequest<IProjectNames>(`project-names/`),
    select: (data) =>
      data.projectNames.concat({ name: 'All Projects >>', slug: '' }),
  });

  return (
    <ProjectNamesContext.Provider value={{ data, isLoading, isError, error }}>
      {props.children}
    </ProjectNamesContext.Provider>
  );
};
