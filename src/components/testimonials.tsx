import React, { FC, useContext } from 'react';

import { ResumeContext } from '../context/resume.context';
import { Testimonial } from '../types';


interface Props {
  items: Testimonial[];
}

const TestimonialItem: FC<Testimonial> = ({ user, text }) => (
  <li key={user}>
    <blockquote>
      <p>{text}</p>
      <cite>{user}</cite>
    </blockquote>
  </li>
)

const TestimonialList: FC<Props> = ({ items }) => (
  <ul className="slides">
    {items.map(item => <TestimonialItem key={item.user} {...item} />)}
  </ul>
)

const Testimonials: FC = () => {
  const { testimonials } = useContext(ResumeContext);

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
        <div className="two columns header-col">
          <h1><span>Client Testimonials</span></h1>
        </div>
        <div className="ten columns flex-container">
          <TestimonialList items={testimonials} />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;