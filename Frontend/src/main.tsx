import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './provider/Route.tsx'
import { Provider } from 'react-redux'
import { store } from './provider/Store.tsx'
import { PrimeReactProvider } from 'primereact/api'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import React from 'react'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
    <Provider store={store}>
    <RouterProvider router={Routes} />
    </Provider>
    </PrimeReactProvider>
  </React.StrictMode>,
)
