import React from "react"
import { Modal } from "@byte-design/ui"
import { observer } from "mobx-react-lite"
import SearchKeyWold from "./modules/SearchKeyWold"

import SDKStore from "./context"

const AllModules: React.FC = () => {
  const store = SDKStore
  console.log(1111111, store)
  return (
    <>
      {store.type === "searchKeyWord" && (
        <SearchKeyWold />
      )}
      {store.type === "searchKeyWord2" && (
        <Modal
          show={store.open}
          hideToDestroy={true}
          header="我是标题"
          size="sm"
          onClose={() => (store.open = false)}
        >
          普通对话框标题普通对话框标题普通对222222
        </Modal>
      )}
    </>
  )
}

export default observer(AllModules)
