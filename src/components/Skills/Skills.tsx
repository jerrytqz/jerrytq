import { useQuery } from '@tanstack/react-query';

import { ISkills } from '../../api/interfaces';
import getRequest from '../../api/requests/getRequest';
import Divider from '../../shared/userInterfaces/Divider/Divider';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import MultiArea from '../../shared/userInterfaces/MultiArea/MultiArea';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import Skill from './Skill/Skill';
import classes from './Skills.module.css';

interface ISkillAreaSkeleton {
  title: string;
  key: keyof ISkills['skills'];
}

const Skills: React.FC = () => {
  const {
    data: skills,
    isLoading: queryLoading,
    isError: hasQueryError,
    error: queryError,
  } = useQuery({
    queryKey: ['skills'],
    queryFn: () => getRequest<ISkills>(`skills/`),
    select: (data) => data.skills,
  });

  const skillAreaSkeletons: ISkillAreaSkeleton[] = [
    { title: 'Languages', key: 'languages' },
    { title: 'Frameworks', key: 'frameworks' },
    { title: 'Libraries', key: 'libraries' },
    { title: 'Tools', key: 'tools' },
    { title: 'Platforms', key: 'platforms' },
  ];

  return (
    <section className={classes.Container}>
      <header className={classes.Header}>
        <h2 className={classes.Title}>Skills</h2>
        <Divider />
      </header>
      <MultiArea
        className={classes.MultiArea}
        areas={skillAreaSkeletons.map((skeleton) => ({
          title: skeleton.title,
          body:
            queryLoading || hasQueryError ? null : (
              <div className={classes.Skills}>
                {skills?.[skeleton.key].map((skill) => (
                  <Skill
                    proficiency={skill.proficiency}
                    key={skill.name}
                    name={skill.name}
                    imageUrl={skill.imageLink.url}
                    imageAlt={skill.imageLink.alt}
                  />
                ))}
              </div>
            ),
        }))}
      >
        {queryLoading ? (
          <LoadingSpinner
            style={{ fontSize: '9px', margin: '64px auto 0 auto' }}
          />
        ) : hasQueryError ? (
          <FetchError error={queryError} />
        ) : null}
      </MultiArea>
    </section>
  );
};

export default Skills;
