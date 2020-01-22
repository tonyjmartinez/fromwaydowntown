import React, { useEffect, useContext, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Navbar from "../navbar";

import useSiteMetadata from "../SiteMetadata";
import { withPrefix } from "gatsby";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";

const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;
const StyledWrapper = styled.div`
  // background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
`;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const [darkMode, setDarkMode] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const themeContext = useContext(ThemeManagerContext);

  // useEffect(() => {
  //   if (localStorage.getItem("theme") === "dark") {
  //     require("../all.sass");
  //   } else {
  //     require("../cerulean.sass");
  //   }
  // }, []);

  useEffect(() => {
    setDarkMode(window.__theme === "dark" ? true : false);
    window.__onThemeChange = () =>
      setDarkMode(window.__theme === "dark" ? true : false);
  }, []);

  useEffect(() => {
    console.log("dark mode useEffect");
    if (darkMode !== null && themeContext.isDark !== darkMode) {
      console.log("hereeee");
      themeContext.toggleDark();
      window.__setPreferredTheme(darkMode ? "dark" : "light");
      setDarkMode(darkMode);
    }
  }, [darkMode]);

  return (
    <Wrapper>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
        </style>
      </Helmet>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setLoginOpen={setLoginOpen}
        title="from way downtown"
      />

      <div>{children}</div>
    </Wrapper>
  );
};

export default TemplateWrapper;
