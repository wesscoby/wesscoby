import React, { FC, useContext } from 'react';

import { ResumeContext } from '../context/resume.context';
import { Project } from '../types';


interface Props {
  projects: Project[];
}

const ProjectItem: FC<Project> = ({ title, image, category, url }) => (
  <div className="columns portfolio-item">
    <div className="item-wrap">
      <a href={url} title={title}>
        <img src={`/images/portfolio/${image}`} alt={title} />
        <div className="overlay">
          <div className="portfolio-item-meta">
            <h5>{title}</h5>
            <p>{category}</p>
          </div>
        </div>
        <div className="link-icon">
          <i className="fa fa-link" />
        </div>
      </a>
    </div>
  </div>
)

const Projects: FC<Props> = ({ projects }) => (
  <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
    {projects.map(project => <ProjectItem key={project.title} {...project} />)}
  </div>
)


const Portfolio: FC = () => {
  const { portfolio: { projects } } = useContext(ResumeContext);

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works</h1>
          <Projects projects={projects} />
        </div>
      </div>
    </section>
  )
}

export default Portfolio;