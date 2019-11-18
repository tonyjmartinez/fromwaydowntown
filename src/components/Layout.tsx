import React, { useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import styled from "styled-components";
import Navbar from "./navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import Toggle from "./Toggle";
import useDarkMode from "../hooks/useDarkMode";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";
import Button from "./button";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const [darkMode, setDarkMode] = useDarkMode();
  const themeContext = useContext(ThemeManagerContext);

  console.log(darkMode);
  console.log(themeContext.isDark);
  const StyledWrapper = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    height: 100vh;
  `;

  useEffect(() => {
    if (themeContext.isDark !== darkMode) {
      themeContext.toggleDark();
    }
  }, [darkMode]);

  return (
    <StyledWrapper>
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
      </Helmet>
      <Navbar title="from way downtown" />
      <Toggle enabled={darkMode} setEnabled={setDarkMode} />
      <Button>Text</Button>
      <div>{children}</div>
    </StyledWrapper>
  );
};

export default TemplateWrapper;
