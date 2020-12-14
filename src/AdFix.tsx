import React from "react"
import ReactDOM from "react-dom"
import "@byte-design/ui/themes/platform/index.css"

import AllModules from "./AllModules"
import SDKStore from "./context"

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
    SDKStore.from = from
    this.uuid = uuid
    SDKStore.uuid = uuid
  }
  searchSDK(type: string, ad: any, callback = () => {}) {
    console.log(22222222222, SDKStore)
    SDKStore.type = type
    SDKStore.open = true
    SDKStore.ad = ad
    SDKStore.callback = callback
  }
}

export default AdFix
