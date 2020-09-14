import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ResumeContextProvider } from './context/resume.context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ResumeContextProvider>
      <App />
    </ResumeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
