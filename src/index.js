import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import ThemeProv from 'styles/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProv>
      <App />
    </ThemeProv>
  </React.StrictMode>
);
