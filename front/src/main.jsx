import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import WishlistProvider from './context/WishlistProvider.jsx'
import BasketProvider from './context/BasketProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvider>
    <WishlistProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </WishlistProvider>
    </BasketProvider>
  </React.StrictMode>,
)
