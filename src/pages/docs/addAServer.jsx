import * as uniux from "uniux"
import React from "react"
import appConfig from "../../components/appConfigs/index.js"

export default () => {
    <uniux.Main
      type="columnedApp"
      appConfig={appConfig}
      page={appConfig.pageConfigs.addAServer}
    >
      <h1>Get started with add your discord server to the list.</h1>
    </uniux.Main>
}