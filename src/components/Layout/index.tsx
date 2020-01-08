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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
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
