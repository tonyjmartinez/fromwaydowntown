import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Table from "../components/Table";
import Content, { HTMLContent } from "../components/Content";
import moment from "moment";
import styled from "styled-components";

export const IndexPageTemplate = ({ title, content, contentComponent }) => {
  return <div>Index</div>;
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ContentWrapper = styled.div`
  margin: 0px auto;
  margin-top: 2em;
`;

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
      <ContentWrapper style={{ width: "80%" }}>
        <Card />
      </ContentWrapper>
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
