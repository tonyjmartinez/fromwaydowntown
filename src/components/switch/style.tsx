import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import posed, { PoseGroup } from "react-pose";
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
  left: { x: "1px" },
  right: { x: "37px" },
  initialPose: "left"
});
const BallWrapper = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

interface Props {
  darkMode: boolean;
  setDarkMode: () => {};
}

const Switch = (props: Props) => {
  const { darkMode, setDarkMode } = props;

  const useStyles = makeStyles({
    root: {
      color: `${darkMode ? darkTheme.iconColor : lightTheme.iconColor}`
    }
  });
  const classes = useStyles();
  const Basketball = props => (
    <SportsBasketballIcon className={classes.root} fontSize="large" />
  );
  const StyledBBall = styled(Basketball)``;
  const BBall = props => <StyledBBall {...props} />;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <SwitchBg onClick={() => toggleDarkMode()}>
      <Toggle pose={darkMode ? "left" : "right"}>
        <BBall style={{ opacity: 0 }} key={2} />
      </Toggle>
    </SwitchBg>
  );
};

export default Switch;
