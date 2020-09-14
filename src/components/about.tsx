import React, { FC, useContext } from 'react';

import { Address } from './shared';
import { ResumeContext } from '../context/resume.context';


const About: FC = () => {
  const {
    main: {
      bio, image, resumeDownload
    }
  } = useContext(ResumeContext);

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={`images/${image}`}
            alt="WessCoby's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <Address />
            </div>
            <div className="columns download">
              <p>
                <a className="button" href={resumeDownload}>
                  <i className="fa fa-download"></i>{' '}Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;