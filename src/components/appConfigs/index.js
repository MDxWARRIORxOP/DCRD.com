import * as uniux from "uniux";

const appConfig = {
  parentProject: { name: "DCRD.com" },
  name: "DRCD.com",
  rootURL: "",
  design: {
    themeColour: uniux.colourPacks.green.darker
  },
  sections: ["Home", "Docs"],

  pageConfigs: {
    home: {
      name: "Home",
      icon: uniux.icons.faHome,
      url: ""
    },
    getStarted: {
      name: "Get Started.",
      icon: uniux.icons.faPage,
      url: "docs/"
    }
  }
};

export default appConfig;
