import React from "react"
import { AdFix } from "../index"

function App() {
  const adFix = React.useRef(new AdFix("diagnosis", "1234")).current
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={adFix.test1}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Rea
        </a>
      </header>
    </div>
  )
}

export default App
