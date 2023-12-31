import React from 'react'
import { createRoot, } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'
import { PhotoProvider } from 'react-image-previewer'

import App from './App'
import store from './redux/store'

import './index.css'
import favicon from './favicon.png'

import $ from'jquery/dist/jquery.min.js'
import Popper from'@popperjs/core/dist/cjs/popper'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import './lux_bootstrap.min.css'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Helmet>
      <link 
        rel="icon" 
        type="image/png"
        href={favicon}
      />
    </Helmet>
    <Provider store={store}>
      <PhotoProvider>
        <App />
      </PhotoProvider>
    </Provider>
  </React.StrictMode>
)