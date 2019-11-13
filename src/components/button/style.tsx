import React, { ReactChildren, ReactNode, useContext } from "react";
import styled, { ThemeConsumer } from "styled-components";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";
import "../all.sass";

interface Props {
  className: string;
  children: ReactNode;
}
interface StyleProps {
  children: ReactNode;
}

const BulmaBtn = (props: Props) => {
  const { className, children } = props;
  const themeContext = useContext(ThemeManagerContext);
  console.log(themeContext);
  const cls = `button ${themeContext.isDark ? "is-black" : "is-primary"}`;
  console.log(cls);
  return <button className={cls}>{children}</button>;
};

const StyledBtn = styled(BulmaBtn)`
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.secondaryColor};
`;

export default (props: StyleProps) => {
  return <StyledBtn {...props} />;
};
