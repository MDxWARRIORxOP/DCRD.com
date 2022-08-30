import * as uniux from "uniux";

const appConfig = {
  parentProject: { name: "DCRD.com" },
  name: "DRCD.com",
  rootURL: "",
  design: {
    themeColour: uniux.colourPacks.green.darker,
  },
  sections: ["Home", "Docs"],

  pageConfigs: {
    home: {
      name: "Home",
      icon: uniux.icons.faHome,
      url: "",
    },
    getStarted: {
      name: "Get Started.",
      icon: uniux.icons.faBook,
      url: "docs/",
    },
    addABot: {
      name: "Add s Bot.",
      icon: uniux.icons.faRobot,
      url: "docs/addABot",
    },
    addAServer: {
      name: "Add a Server.",
      icon: uniux.icons.faServer,
      url: "docs/addAServer",
    },
    addAnEmoji: {
      name: "Add an Emoji.",
      icon: uniux.icons.faFaceGrin,
      url: "docs/addAnEmoji",
    },
  },
};

export default appConfig;
