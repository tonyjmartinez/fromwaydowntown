import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

interface Props {
  title: string;
}

const NavBar = (props: Props) => {
  const { title } = props;
  console.log(props);
  return <div>Replace me with Navbar from Bulma COmponents</div>;
};

export default NavBar;
