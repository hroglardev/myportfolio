import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ModeContextProvider } from './context/ModeContext.jsx';
import { LanguageContextProvider } from './context/LanguageContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageContextProvider>
      <ModeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModeContextProvider>
    </LanguageContextProvider>
  </StrictMode>
);

