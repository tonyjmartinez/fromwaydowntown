import React, { useState } from "react";
import { navigate } from "gatsby";
import {
  IdentityModal,
  useIdentityContext
} from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";
import styled from "styled-components";

interface Props {
  open: boolean;
  setOpen: (x: boolean) => {};
}

const Login = (props: Props) => {
  const { open, setOpen } = props;

  return (
    <IdentityModal showDialog={open} onCloseDialog={() => setOpen(false)} />
  );
};

export default Login;
