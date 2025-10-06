import { StrictMode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AppProvider } from './context/AppContext.tsx';
import { ResourceHints } from './ResourceHints.tsx';
import './styles/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResourceHints />
      <AppProvider>
          <App />
      </AppProvider>
      <Analytics />
  </StrictMode>,
);
