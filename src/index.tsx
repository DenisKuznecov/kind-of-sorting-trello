import '!style-loader!css-loader!./style.css'
import * as React from 'react'
import { render } from 'react-dom'

import App from './app'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)