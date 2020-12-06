import React from "react"
import ReactDOM from "react-dom"
import AllModules from "./AllModules"

let adFixModule = document.createElement("div")
adFixModule.id = "ad-diagnosis-sdk"
document.body.appendChild(adFixModule)

ReactDOM.render(
  <React.StrictMode>
    <AllModules />
  </React.StrictMode>,
  document.getElementById("ad-diagnosis-sdk")
)

class AdFix {
  from: string
  uuid: string
  constructor(from: string, uuid: string) {
    this.from = from
    this.uuid = uuid
  }
  test1() {
    console.log(22222222222)
  }
}

export default AdFix
