import React, { FC, useContext } from 'react';

import { ResumeContext } from '../context/resume.context';
import { NavLink, NetworkList } from './shared';


const Header: FC = () => {
  const {
    main: {
      name, occupation, description, address, social
    }
  } = useContext(ResumeContext);

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a
          href="#nav-wrap"
          className="mobile-btn"
          title="Show Navigation"
        >
          Show Navigation
        </a>
        <a
          href="#home"
          className="mobile-btn"
          title="Hide Navigation"
        >
          Hide Navigation
        </a>
        <ul id="nav" className="nav">
          <NavLink current to="#home" name="Home" />
          <NavLink to="#about" name="About" />
          <NavLink to="#resume" name="Resume" />
          <NavLink to="#portfolio" name="Portfolio" />
          <NavLink to="#testimonials" name="Testimonials" />
          <NavLink to="#contact" name="Contact" />
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>I'm a {address.city} based
            <span>{occupation}</span>.
            {description}.
          </h3>
          <hr />
          <NetworkList className="social" networks={social} />
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>
  )
}

export default Header;