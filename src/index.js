import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { FeedbackProvider } from './context/feedback-context';
ReactDOM.render(
  <React.StrictMode>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
