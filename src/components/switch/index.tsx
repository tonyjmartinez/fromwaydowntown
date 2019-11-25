import React from "react";

import Switch from "./style";

interface Props {
  darkMode: boolean;
  setDarkMode: () => {};
}

const SwitchContainer = (props: Props) => {
  return <Switch {...props} />;
};

export default SwitchContainer;
