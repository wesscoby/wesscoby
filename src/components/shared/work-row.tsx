import React, { FC } from 'react';

import { Work } from '../../types';


interface Props {
  items: Work[];
}

const WorkItem: FC<Work> = ({ company, description, title, years }) => (
  <div>
    <h3>{company}</h3>
    <p className="info">
      {title}
      <span>&bull;</span>{' '}
      <em className="date">{years}</em>
    </p>
    <p>{description}</p>
  </div>
)

const WorkRow: FC<Props> = ({ items }) => (
  <div className="row work">
    <div className="three columns header-col">
      <h1><span>Work</span></h1>
    </div>
    <div className="nine columns main-col">
      {items.map(item => <WorkItem key={item.title} {...item} />)}
    </div>
  </div>
)

export default WorkRow;