import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import GlobalStyles from './styles/GlobalStyles.js'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)