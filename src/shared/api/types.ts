export interface ApiError {
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

export interface IExperiences {
  experiences: IExperience[];
}
