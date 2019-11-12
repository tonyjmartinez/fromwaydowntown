import React, { ReactChildren, ReactNode } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import { Button } from "react-bulma-components";
import styled, { ThemeConsumer } from "styled-components";

interface Props {
  className: string;
  children: ReactNode;
}
interface StyleProps {
  children: ReactNode;
}

const BulmaBtn = (props: Props) => {
  const { className, children } = props;
  console.log(props);
  return <Button className={className}>{children}</Button>;
};

const StyledBtn = styled(BulmaBtn)`
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.secondaryColor};
`;

export default (props: StyleProps) => {
  return <StyledBtn {...props} />;
};
