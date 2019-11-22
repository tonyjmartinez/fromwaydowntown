import React, { useState } from "react";
import styled from "styled-components";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import posed from "react-pose";

const SwitchBg = styled.div`
  width: 80px;
  border-radius: 2em;
  height: 40px;
  border: 3px solid blue;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const ToggleWrapper = styled.div`
  width: 20px;
`;

const Toggle = posed.div({
  left: { x: "-10px" },
  right: { x: "10px" }
});

const Switch = props => {
  const [checked, setChecked] = useState(true);
  return (
    <SwitchBg>
      <Toggle
        onClick={() => setChecked(false)}
        pose={checked ? "left" : "right"}
      >
        <SportsBasketballIcon color="primary" fontSize="large" />
      </Toggle>
    </SwitchBg>
  );
};

export default Switch;
