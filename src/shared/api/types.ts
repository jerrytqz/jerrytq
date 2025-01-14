export interface IApiError {
  error: string;
}

interface IExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  imageLink: {
    url: string;
    alt: string;
  };
}

interface IProjectName {
  name: string;
  slug: string;
}

export interface IExperiences {
  experiences: IExperience[];
}

export interface IProjectNames {
  projectNames: IProjectName[];
}
