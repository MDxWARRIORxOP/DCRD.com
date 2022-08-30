import * as uniux from "uniux";
import React from "react";
import appConfig from "../components/appConfigs/index.js";
import { Link } from "gatsby";

const index = () => {
  return (
    <uniux.Main
      appConfig={appConfig}
      page={appConfig.pageConfigs.home}
      type="columnedApp"
    >
      <h1>Imagine a place....</h1>
      <p>
        Where you could advertise your discord bot, your discord server, and
        even your disocrd emojis!
      </p>
      <h2>This is the place!</h2>
      <h3>
        DRCD.com lets you list your discord bot, your discord server, your
        emojis and much more!
      </h3>
      <p>
        To get started, view <Link href="/docs/">the docs</Link>!
      </p>
    </uniux.Main>
  );
};

export default index;
