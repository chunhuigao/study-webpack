import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.less'
import Home from './Home/index.tsx'
import List from './List/index.tsx'

export default class App extends Component {
  render() {
    return (
      <div>
        我webpack来自react <Home />
        <List />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
