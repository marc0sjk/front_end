import React from 'react'
import ReactDOM from 'react-dom/client'
import Titleview from "./pages/primeirocomponente"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Titleview titulo="CALMA!" paragrafo="não grita 🤫"/>
  </React.StrictMode>,
)
