import * as uniux from "uniux";
import React from "react";
import appConfig from "../../components/appConfigs/index.js";

export default () => {
  return (
    <uniux.Main
      type="columnedApp"
      appConfig={appConfig}
      page={appConfig.pageConfigs.getStarted}
    >
      <h1>Wassup</h1>
    </uniux.Main>
  );
};
