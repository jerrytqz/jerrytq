// INTERNAL ----------------------------------------------------------------------------------------

export interface IApiError {
  error: string;
}

// API RESULTS -------------------------------------------------------------------------------------

interface IImageLink {
  url: string;
  alt: string;
}

interface IExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  imageLink: IImageLink;
}

interface IProjectName {
  name: string;
  slug: string;
}

interface ISkill {
  name: string;
  proficiency: string;
  imageLink: IImageLink;
}

export interface IExperiences {
  experiences: IExperience[];
}

export interface IProjectNames {
  projectNames: IProjectName[];
}

export interface IContactFormGet {
  form: string;
}

export interface IContactFormPost {}

export interface ISkills {
  skills: {
    languages: ISkill[];
    frameworks: ISkill[];
    libraries: ISkill[];
    tools: ISkill[];
    platforms: ISkill[];
  };
}
