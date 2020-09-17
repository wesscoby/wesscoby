import React from 'react';
import ReactGA from 'react-ga';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Header, About, Resume, Portfolio, Testimonials, Contact, Footer
} from './components';

// Google Analytics
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID!);
ReactGA.pageview(window.location.pathname);

toast.configure();
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
