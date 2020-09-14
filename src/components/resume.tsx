import React, { FC, useContext } from 'react';

import { ResumeContext } from '../context/resume.context';
import { WorkRow, Skills, EducationRow } from './shared';


const Resume: FC = () => {
  const {
    resume: { skillmessage, skills, education, work }
  } = useContext(ResumeContext);

  return (
    <section id="resume">
      <EducationRow items={education} />
      <WorkRow items={work} />
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>{skillmessage}</p>
          <Skills items={skills} />
        </div>
      </div>
    </section>
  )
}

export default Resume;