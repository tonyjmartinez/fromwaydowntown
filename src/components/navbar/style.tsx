import React, { useState, useEffect } from "react";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import { Link } from "gatsby";
import styled from "styled-components";

interface Props {
  title: string;
  className: string;
  setLoginOpen: () => {};
}

const StyledTitle = styled.h1`
  && {
    color: ${props => props.theme.titleColor};
    font-family: "Bungee Shade", cursive;
  }
`;

const BulmaNavBar = props => {
  const { title, className, setLoginOpen } = props;
  console.log(props);
  return (
    <nav
      className={`navbar ${className}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <StyledTitle className="title">{title}</StyledTitle>
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <SportsBasketballIcon color="primary" fontSize="large" />
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a onClick={setLoginOpen} className="button is-light">
                Log in
              </a>
            </div>
          </div>
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
