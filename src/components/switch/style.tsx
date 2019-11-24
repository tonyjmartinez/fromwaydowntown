import React, { useState } from "react";
import styled from "styled-components";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import posed from "react-pose";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../style/theme";
const { darkTheme, lightTheme } = theme;

const SwitchBg = styled.div`
  width: 80px;
  border-radius: 2em;
  height: 40px;
  border: 3px solid ${props => props.theme.mainColor};
  position: relative;
  margin: 0px auto;
`;

const Toggle = posed.div({
  left: { x: "3px" },
  right: { x: "37px" }
});

interface Props {
  darkMode: boolean;
  setDarkMode: () => {};
}

const Switch = (props: Props) => {
  console.log("Switch", props);
  const { darkMode, setDarkMode } = props;
  const useStyles = makeStyles({
    root: {
      color: `${darkMode ? darkTheme.iconColor : lightTheme.iconColor}`
    }
  });
  const [checked, setChecked] = useState(true);
  const classes = useStyles();
  const Basketball = props => (
    <SportsBasketballIcon className={classes.root} fontSize="large" />
  );
  const StyledBBall = styled(Basketball)``;
  const BBall = props => <StyledBBall {...props} />;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setChecked(!checked);
  };

  return (
    <SwitchBg style={{ zIndex: 1 }} onClick={() => toggleDarkMode()}>
      <Toggle style={{ zIndex: 0 }} pose={checked ? "left" : "right"}>
        <BBall />
      </Toggle>
    </SwitchBg>
  );
};

export default Switch;
