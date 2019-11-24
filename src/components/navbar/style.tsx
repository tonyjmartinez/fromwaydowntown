import React, { useState, useEffect } from "react";
import Switch from "../switch";
import { Link } from "gatsby";
import styled from "styled-components";

interface Props {
  title: string;
  className: string;
  setLoginOpen: () => {};
  darkMode: boolean;
  setDarkMode: () => {};
}

const StyledTitle = styled.div`
  && {
    color: ${props => props.theme.titleColor};
    font-family: "Bungee Shade", cursive;
    font-size: 1.5em;
    width: 100%;
  }
`;

const TitleDiv = styled.div`
  && {
    margin-right: 0.5em;
    display: inline-block;
  }
`;

const navItemStyle = {
  width: "50%"
};

const BulmaNavBar = (props: Props) => {
  const { title, className, darkMode, setDarkMode } = props;
  console.log("BulmaNav", props);
  const splitTitle = title.split(" ");
  return (
    <nav className={`navbar is-transparent ${className}`}>
      <div className="navbar-brand">
        <a style={{ width: "70%" }} className="navbar-item" href="/">
          <StyledTitle>
            {splitTitle.map((word, idx) => {
              return <TitleDiv key={idx}>{word}</TitleDiv>;
            })}
          </StyledTitle>
        </a>
        <div style={{ width: "30%" }} className="navbar-item">
          <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  );
};

const StyledNavBar = styled(BulmaNavBar)`
  && {
    background-color: ${props => props.theme.backgroundColor};
  }
`;

export default props => {
  return <StyledNavBar {...props} />;
};

/*


    // <nav
    //   className={`navbar ${className}`}
    //   role="navigation"
    //   aria-label="main navigation"
    // >
    //   <div className="navbar-brand">
    //     <a className="navbar-item" href="/">
    //       <StyledTitle>{title}</StyledTitle>
    //       <Switch />
    //     </a>
    //   </div>

    //   <div id="navbarBasicExample" className="navbar-menu is-active">
    //     <div className="navbar-start"></div>
    //     <div className="navbar-end">
    //       <div className="navbar-item">
    //         <div className="buttons">
    //           <a className="button is-primary">
    //             <strong>Sign up</strong>
    //           </a>
    //           <a onClick={setLoginOpen} className="button is-light">
    //             Log in
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

*/
