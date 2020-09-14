import React, { FC, useContext } from 'react';

import { ResumeContext } from '../context/resume.context';
import { NetworkList, Credit } from './shared';


const Footer: FC = () => {
  const { main } = useContext(ResumeContext);

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <NetworkList className="social-links" networks={main.social} />
          <Credit />
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;