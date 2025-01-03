import { useQuery } from '@tanstack/react-query';
import React from 'react';

import getRequest from '../../shared/api/getRequest';
import Divider from '../../shared/userInterfaces/Divider/Divider';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import MultiArea from '../../shared/userInterfaces/MultiArea/MultiArea';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import Skill from './Skill/Skill';
import classes from './Skills.module.css';

const Skills = () => {
  const {
    data: skills,
    isLoading: fetchLoading,
    isError: hasFetchError,
    error: fetchError,
  } = useQuery({
    queryKey: ['skills'],
    queryFn: () => getRequest(`skills/`),
    select: (data) => data.skills,
  });

  return (
    <section className={classes.Container}>
      <header className={classes.Header}>
        <h2 className={classes.Title}>Skills</h2>
        <Divider />
      </header>
      <MultiArea
        className={classes.MultiArea}
        areas={[
          {
            title: 'Languages',
            body:
              fetchLoading || hasFetchError ? null : (
                <div className={classes.Skills}>
                  {skills.languages.map((lang) => (
                    <Skill
                      proficiency={lang.proficiency}
                      key={lang.name}
                      name={lang.name}
                      imageUrl={lang.imageLink.url}
                      imageAlt={lang.imageLink.alt}
                    />
                  ))}
                </div>
              ),
          },
          {
            title: 'Frameworks',
            body:
              fetchLoading || hasFetchError ? null : (
                <div className={classes.Skills}>
                  {skills.frameworks.map((frame) => (
                    <Skill
                      proficiency={frame.proficiency}
                      key={frame.name}
                      name={frame.name}
                      imageUrl={frame.imageLink.url}
                      imageAlt={frame.imageLink.alt}
                    />
                  ))}
                </div>
              ),
          },
          {
            title: 'Libraries',
            body:
              fetchLoading || hasFetchError ? null : (
                <div className={classes.Skills}>
                  {skills.libraries.map((lib) => (
                    <Skill
                      proficiency={lib.proficiency}
                      key={lib.name}
                      name={lib.name}
                      imageUrl={lib.imageLink.url}
                      imageAlt={lib.imageLink.alt}
                    />
                  ))}
                </div>
              ),
          },
          {
            title: 'Tools',
            body:
              fetchLoading || hasFetchError ? null : (
                <div className={classes.Skills}>
                  {skills.tools.map((tool) => (
                    <Skill
                      proficiency={tool.proficiency}
                      key={tool.name}
                      name={tool.name}
                      imageUrl={tool.imageLink.url}
                      imageAlt={tool.imageLink.alt}
                    />
                  ))}
                </div>
              ),
          },
          {
            title: 'Platforms',
            body:
              fetchLoading || hasFetchError ? null : (
                <div className={classes.Skills}>
                  {skills.platforms.map((plat) => (
                    <Skill
                      proficiency={plat.proficiency}
                      key={plat.name}
                      name={plat.name}
                      imageUrl={plat.imageLink.url}
                      imageAlt={plat.imageLink.alt}
                    />
                  ))}
                </div>
              ),
          },
        ]}
      >
        {fetchLoading ? (
          <LoadingSpinner
            style={{ fontSize: '9px', margin: '64px auto 0 auto' }}
          />
        ) : hasFetchError ? (
          <FetchError error={fetchError} />
        ) : null}
      </MultiArea>
    </section>
  );
};

export default Skills;
