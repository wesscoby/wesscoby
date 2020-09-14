import React, { FC } from 'react';

import { Education } from '../../types';


interface Props {
  items: Education[];
}

const EducationItem: FC<Education> = ({
  school, degree, description, graduated
}) => (
  <div>
    <h3>{school}</h3>
    <p className="info">
      {degree} <span>&bull;</span>
      <em className="date">{graduated}</em>
    </p>
    <p>{description}</p>
  </div>
)

const EducationRow: FC<Props> = ({ items }) => (
  <div className="row education">
    <div className="three columns header-col">
      <h1><span>Education</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        {items.map(item => <EducationItem key={item.school} {...item} />)}
      </div>
    </div>
  </div>
)

export default EducationRow;