import React, {
  ReactChildren,
  ReactNode,
  useContext
} from "./node_modules/react";
import styled, { ThemeConsumer } from "./node_modules/styled-components";
import { ThemeManagerContext } from "./node_modules/gatsby-styled-components-dark-mode";

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
  const cls = `button ${themeContext.isDark ? "is-black" : "is-primary"}`;
  return <button className={cls}>{children}</button>;
};

const StyledBtn = styled(BulmaBtn)`
  // background-color: ${props => props.theme.mainColor};
  // color: ${props => props.theme.secondaryColor};
`;

export default (props: StyleProps) => {
  return <StyledBtn {...props} />;
};
