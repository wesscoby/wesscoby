import React, { FC } from 'react';


interface Props {
  to: string;
  name: string;
  current?: boolean;
}

const NavLink: FC<Props> = ({ name, to, current = false }) => {

  return (
    <li className={`${current && 'current'}`}>
      <a className="smoothscroll" href={to}>{name}</a>
    </li>
  )
}

export default NavLink;