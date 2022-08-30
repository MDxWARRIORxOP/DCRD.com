import * as uniux from "uniux";
import React from "react";
import appConfig from "../../components/appConfigs/index.js";
import { Link } from "gatsby";

export default () => {
  return (
    <uniux.Main
      type="columnedApp"
      appConfig={appConfig}
      page={appConfig.pageConfigs.getStarted}
    >
      <h1>Hello there!</h1>
      <h2>Welcome to the docs.</h2>
      <p>
        This tutorial will help you advertise your discord bot, server and
        emojis on the site.
      </p>
      <ul>
        <li>
          <Link href="/addABot">Get started with adding a bot.</Link>
        </li>
        <li>
          <Link href="/addAServer">Get started with adding a server.</Link>
        </li>
        <li>
          <Link href="/addAnEmoji">Get started with adding an emoji.</Link>
        </li>
      </ul>
    </uniux.Main>
  );
};
