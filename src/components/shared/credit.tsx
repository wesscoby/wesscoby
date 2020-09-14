import React, { FC } from 'react';


const Credit: FC = () => (
  <>
    <ul>
      <li>
        Modified with love by the Clever Programmer team{' '}
        <span role="img" aria-label="heart">♥️</span>
      </li>
    </ul>
    <ul className="copyright">
      <li>
        &copy; All credit goes to Tim Baker - Copyright 2017 Tim Baker
      </li>
      <li>
        Design by
        <a title="Styleshout" href="http://www.styleshout.com/">
          Styleshout
        </a>
      </li>
    </ul>
  </>
)

export default Credit;