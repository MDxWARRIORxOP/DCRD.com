import * as uniux from "uniux";
import React from "react";
import appConfig from "../../components/appConfigs/index.js";

export default () => {
  return (
    <uniux.Main
      type="columnedApp"
      appConfig={appConfig}
      page={appConfig.pageConfigs.addABot}
    >
      <h1>Get started with add your discord bot to the list.</h1>
    </uniux.Main>
  );
};
