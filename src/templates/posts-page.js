import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import styled from "styled-components";

export const PostsPageTemplate = props => <h1>Hello there</h1>;

const StyledHeader = styled.h1`
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.secondaryColor};
  padding: 0.3em;
`;

const PostsPage = ({ data }) => {
  console.log("[index-page.js]", data);
  return (
    <Layout>
      <StyledHeader className="has-text-weight-bold is-size-4">
        Latest Posts
      </StyledHeader>
      <section className="section section--gradient">
        <div className="container">
          <BlogRoll />
        </div>
      </section>
    </Layout>
  );
};

PostsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default PostsPage;
