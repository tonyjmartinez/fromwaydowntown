import React, { useEffect, useContext, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import styled from "styled-components";
import Navbar from "./navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import Toggle from "./Toggle";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";
import Button from "./button";
import Login from "../app/login";

const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;
const StyledWrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  height: 100vh;
`;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const [darkMode, setDarkMode] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const themeContext = useContext(ThemeManagerContext);

  useEffect(() => {
    // Start off in Dark Mode
    themeContext.toggleDark();
    console.log("Window theme", window.__theme);
    setDarkMode(window.__theme === "dark" ? true : false);
    window.__onThemeChange = () =>
      setDarkMode(window.__theme === "dark" ? true : false);
  }, []);

  useEffect(() => {
    console.log("themectx", themeContext.isDark, darkMode);
    if (darkMode !== null && themeContext.isDark !== darkMode) {
      console.log("hereeee");
      themeContext.toggleDark();
    }
  }, [darkMode]);

  useEffect(() => {
    console.log("useEffect", darkMode);

    if (darkMode !== null) {
      console.log("here");
      window.__setPreferredTheme(darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  console.log("darkMode", darkMode);
  console.log(themeContext.isDark);

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
          url('https://fonts.googleapis.com/css?family=Bungee+Shade&display=swap');
        </style>
      </Helmet>
      <Navbar setLoginOpen={setLoginOpen} title="from way downtown" />
      <Toggle enabled={darkMode} setEnabled={setDarkMode} />
      <Button>Text</Button>
      <Login open={loginOpen} setOpen={setLoginOpen} />
      <div>{children}</div>
    </Wrapper>
  );
};

export default TemplateWrapper;
