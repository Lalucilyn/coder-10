import React from 'react'
import store from './store'
import {Provider} from 'react-redux'
import ApplicationContainer from './routing'

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationContainer />
    </Provider>
  )
}
