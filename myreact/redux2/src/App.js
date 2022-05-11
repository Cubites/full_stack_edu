import React from 'react'
import Subscribers from './component/Subscribers'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Subscribers />
      </div>
    </Provider>
  )
}

export default App