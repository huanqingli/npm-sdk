import { observable } from "mobx"
// import { createContext } from "react"

import { SDKStoreType } from "./types"

const sdkStore = observable<SDKStoreType>({
  from: "",
  uuid: "",
  open: false,
  type: "",
  ad: {},
  callback: () => {},
})

export default sdkStore
