import '!style-loader!css-loader!./style.css'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './config/store'

import App from './containers/app'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)