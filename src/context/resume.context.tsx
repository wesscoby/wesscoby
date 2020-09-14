import React, { FC, createContext, useState } from 'react';

import resumeData from './resume-data.json';
import { ResumeData, Main, Testimonial, Portfolio, Resume } from '../types';


export const ResumeContext = createContext<ResumeData>(resumeData);

export const ResumeContextProvider: FC = ({ children }) => {
  const [main] = useState<Main>(resumeData.main);
  const [resume] = useState<Resume>(resumeData.resume);
  const [portfolio] = useState<Portfolio>(resumeData.portfolio);
  const [testimonials] = useState<Testimonial[]>(resumeData.testimonials);

  const { Provider } = ResumeContext;

  return (
    <Provider value={{ main, resume, portfolio, testimonials }}>
      {children}
    </Provider>
  )
}