import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Add error handling for the root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  // Create root element if missing
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);
  console.warn('Root element not found. Created a new one.');
}

createRoot(rootElement || document.body).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
