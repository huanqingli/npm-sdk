import React from "react"
import { Modal } from "@byte-design/ui"
import { observer } from "mobx-react-lite"

import SDKStore from "../context"

const SearchKeyWord: React.FC = () => {
  const store = SDKStore
  console.log(1111111, store)
  return (
    <>
        <Modal
          show={store.open}
          hideToDestroy={true}
          header="我是标题"
          size="sm"
          onClose={() => (store.open = false)}
        >
          <p
            onClick={() => {
              store.ad.test = "change"
              console.log(11111111, store)
            }}
          >
            普通对话框标题普通对
          </p>
          话框标题普通对话框标11111{store.ad?.test}
        </Modal>
    </>
  )
}

export default observer(SearchKeyWord)
