import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const loader = document.querySelector('.loader')

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide')

const hideLoader = () => loader.classList.add('loader--hide') // opacity turns to 0%

setTimeout(
  () =>
    ReactDOM.render(
      <Provider store={store}>
        <App hideLoader={hideLoader} showLoader={showLoader} />
      </Provider>,
      document.getElementById('root')
    ),
  1000
)
