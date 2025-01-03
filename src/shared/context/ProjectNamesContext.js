import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext } from 'react';

import getRequest from '../../shared/api/getRequest';

const ProjectNamesContext = createContext();

export const useProjectNames = () => {
  return useContext(ProjectNamesContext);
};

export const ProjectNamesProvider = (props) => {
  const {
    data: projectNames = [],
    isLoading: fetchLoading,
    isError: hasFetchError,
    error: fetchError,
  } = useQuery({
    queryKey: ['projectNames'],
    queryFn: () => getRequest(`project-names/`),
    select: (data) =>
      data.projectNames.concat({ name: 'All Projects >>', slug: '' }),
  });

  return (
    <ProjectNamesContext.Provider
      value={{ projectNames, fetchLoading, hasFetchError, fetchError }}
    >
      {props.children}
    </ProjectNamesContext.Provider>
  );
};
