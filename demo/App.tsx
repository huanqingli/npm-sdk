import React from "react"
import { AdFix } from "../index"

function App() {
  const adFix = React.useRef(new AdFix("diagnosis", "1234")).current
  return (
    <div className="App">
      <header className="App-header">
        <p
          style={{ margin: "0 0 16px 0" }}
          onClick={() => adFix.quickModifyAD("searchKeyWord", { test: "testText" })}
        >
          点击打开 searchKeyWord
        </p>
        <p onClick={() => adFix.quickModifyAD("searchKeyWord2", { test: "xxx" })}>
          点击打开 searchKeyWord2
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Rea
        </a> */}
      </header>
    </div>
  )
}

export default App
