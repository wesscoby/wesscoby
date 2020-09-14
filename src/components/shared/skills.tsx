import React, { FC } from 'react';

import { Skill } from '../../types';


interface Props {
  items: Skill[];
}

const SkillItem: FC<Skill> = ({ name, level }) => (
  <li>
    <span
      style={{width: level}}
      className={`bar-expand ${name.toLowerCase()}`}
    />
    <em>{name}</em>
  </li>
)

const Skills: FC<Props> = ({ items }) => (
  <div className="bars">
    <ul className="skills">
      {items.map(item => <SkillItem key={item.name} {...item} />)}
    </ul>
  </div>
)

export default Skills;