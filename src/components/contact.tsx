import React, { FC } from 'react';

import { Address, ContactForm } from './shared';


const Contact: FC = () => {

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="row columns header-col">
          <h1><span>Get In Touch.</span></h1>
        </div>
        <div className="ten columns">
        <p className="lead">
          Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you, give me a shout by email or by using the form below if you'd like to get in contact with me
        </p>
        </div>
      </div>
      <div className="row">
        <div className="eight columns">
          <ContactForm />
        </div>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <Address />
          </div>
          <div className="widget widget_tweets" />
        </aside>
      </div>
    </section>
  )
}

export default Contact;