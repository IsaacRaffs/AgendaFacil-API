import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

import CampoDeFutebol from './routes/site_campo_de_fut/agendar_campo_de_futebol.jsx';

const router = createBrowserRouter([
    {
      element: <App/>,
      children: [
        {
          path: '',
          element: <CampoDeFutebol/>
        },
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
