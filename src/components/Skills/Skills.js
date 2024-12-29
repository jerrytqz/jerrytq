import React, { useEffect, useState } from 'react';

import { BACKEND_BASE_DIR } from '../../shared/constants';
import Divider from '../../shared/userInterfaces/Divider/Divider';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import MultiArea from '../../shared/userInterfaces/MultiArea/MultiArea';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import Skill from './Skill/Skill';
import classes from './Skills.module.css';

const Skills = () => {
  const [skills, setSkills] = useState({});
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [fetchErrorMsg, setFetchErrorMsg] = useState(null);

  useEffect(() => {
    fetch(`${BACKEND_BASE_DIR}/fetch-skills/`, { method: 'GET' })
      .then((response) => {
        if (!response.ok)
          return response.json().then((result) => {
            if (response.status === 404) setFetchErrorMsg(result.error);
            throw new Error(result.error);
          });
        else return response.json();
      })
      .then((result) => {
        setSkills(result.skills);
        setFetchLoading(false);
      })
      .catch(() => {
        setFetchError(true);
        setFetchLoading(false);
      });
  }, []);

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
              fetchLoading || fetchError ? null : (
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
              fetchLoading || fetchError ? null : (
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
              fetchLoading || fetchError ? null : (
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
              fetchLoading || fetchError ? null : (
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
              fetchLoading || fetchError ? null : (
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
        ) : fetchError ? (
          <FetchError description={fetchErrorMsg} />
        ) : null}
      </MultiArea>
    </section>
  );
};

export default Skills;
