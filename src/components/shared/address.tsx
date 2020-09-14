import React, { FC, useContext } from 'react';

import { ResumeContext } from '../../context/resume.context';


const Address: FC = () => {
  const { main: { name, phone, email, address } } = useContext(ResumeContext);
  const { state, street, city, zip } = address;

  return (
    <p className="address">
      <span>{name}</span><br />
      <span>{street}<br />{city} {state}, {zip}</span><br />
      <span>{phone}</span><br />
      <span>
        <a href={`mailto:${email}`}>{email}</a>
      </span>
    </p>
  )
}

export default Address;