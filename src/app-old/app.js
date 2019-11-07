import React, { useEffect } from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import NavBar from "./components/NavBar";
import Profile from "./profile";
import Main from "./main";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./login";
import { useIdentityContext } from "react-netlify-identity-widget";

const App = () => {
  // const { authedFetch } = useIdentityContext();

  // useEffect(() => {
  //   authedFetch
  //     .get("/.netlify/functions/auth-hello")
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <Layout>
      <NavBar />
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PublicRoute path="/app">
          <PrivateRoute path="/" component={Main} />
          <Login path="/login" />
        </PublicRoute>
      </Router>
    </Layout>
  );
};
function PublicRoute(props) {
  return <div>{props.children}</div>;
}

export default App;
