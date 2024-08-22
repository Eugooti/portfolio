import { StrictMode } from 'react'
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev/index.js";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode  >
      <Router>
          <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
              <App />
          </DevSupport>
      </Router>

  </StrictMode>,
)
