import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import IdentityModal, {
  useIdentityContext
} from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css"; // delete if you want to bring your own CSS

const Navbar = props => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     active: false,
  //     navBarActiveClass: ""
  //   };
  // }
  const [active, setActive] = useState(false);
  const [navBarActive, setNavBarActive] = useState("");

  useEffect(() => {
    if (active) {
      setNavBarActive("is-active");
    } else {
      setNavBarActive("");
    }
  }, [active]);

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(!active);
    // this.setState(
    //   {
    //     active: !this.state.active
    //   },
    //   // after state has been updated,
    //   () => {
    //     // set the class in state for the navbar accordingly
    //     this.state.active
    //       ? this.setState({
    //           navBarActiveClass: "is-active"
    //         })
    //       : this.setState({
    //           navBarActiveClass: ""
    //         });
    //   }
    // );
  };

  const identity = useIdentityContext();
  const [dialog, setDialog] = React.useState(false);

  console.log("Identity", identity);
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.full_name) ||
    "NoName";

  // console.log(JSON.stringify(identity));

  const isLoggedIn = identity && identity.isLoggedIn;
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActive}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActive}`}>
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <Link className="navbar-item" to="/contact/examples">
              Form Exampleeees
            </Link>
            <Link to="/app/">App</Link>
            <button className="btn" onClick={() => setDialog(true)}>
              {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
            </button>
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </nav>
  );
};

export default Navbar;
