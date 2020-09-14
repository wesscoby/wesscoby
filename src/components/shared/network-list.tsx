import React, { FC } from 'react';

import { Social } from '../../types';


interface Props {
  className: string;
  networks: Social[];
}

const Network: FC<Social> = ({ name, url, className }) => (
  <li>
    <a href={url}>
      <i className={className}></i>
    </a>
  </li>
)

const NetworkList: FC<Props> = ({ className, networks }) => {
  return (
    <ul className={className}>
      {networks.map(
        network => <Network key={network.name} {...network} />
      )}
    </ul>
  )
}

export default NetworkList;