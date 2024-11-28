import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import appstore from './redux/appStore.js';


createRoot(document.getElementById('root')).render(
  <Provider store={appstore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
