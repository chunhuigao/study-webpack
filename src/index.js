import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './Home/index.tsx'

export default class App extends Component {
  render() {
    return (
      <div>
        我webpack来自react <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
