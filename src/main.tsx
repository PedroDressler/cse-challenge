import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CroctProvider } from '@croct/plug-react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CroctProvider appId="00000000-0000-0000-0000-000000000000">
      <App />
    </CroctProvider>
  </React.StrictMode>
)
