import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import moment from "moment";

export const IndexPageTemplate = ({ title, content, contentComponent }) => {
  return <div>Index</div>;
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const IndexPage = ({ data }) => {
  useEffect(() => {
    const fmtDate = moment().format("YYYYMMDD");
    console.log(fmtDate);
    setInterval(() => {
      fetch(`/.netlify/functions/nba?date=${fmtDate}`)
        .then(response => response.json())
        .then(console.log);
    }, 10000);
  }, []);
  return (
    <Layout>
      <h1 className="title">Title</h1>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

export const indexPageQuery = graphql`
  query indexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
