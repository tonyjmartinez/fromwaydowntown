import React, { ReactChildren, ReactNode } from "react";
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
  return <button className={`${className} button`}>{children}</button>;
};

const StyledBtn = styled(BulmaBtn)`
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.secondaryColor};
`;

export default (props: Props) => {
  return <StyledBtn {...props} />;
};
