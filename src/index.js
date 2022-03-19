import React from "react"
import ReactDOM from "react-dom"
import Home from "./Home/index.jsx"
import List from "./List/index.tsx"

export default function Index() {
  return (
    <div>
      我是react <Home />
      <List />
    </div>
  )
}

const root = document.getElementById("root")
// root.textContent = "webpackwqewq2"
ReactDOM.render(<Index />, root)
