import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Table from "../components/Table";
import Content, { HTMLContent } from "../components/Content";
import moment from "moment";
import styled from "styled-components";
import axios from "axios";
import _ from "lodash";

import { SAS, MIA } from "react-nba-logos";
import * as foo from "react-nba-logos";

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
    console.log(foo["SAS"]);
    const fetchGames = async () => {
      const fmtDate = moment().format("YYYYMMDD");
      const res = await axios.get(`/.netlify/functions/nba?date=${fmtDate}`);
      const games = _.get(res, "data.games.games");
      console.log(games);
      setTimeout(fetchGames, 4000);
    };
    fetchGames();
  }, []);

  const results = [
    {
      logo: <SAS size={30} />,
      team: "San Antonio Spurs",
      score: 132
    },
    {
      logo: <MIA size={30} />,
      team: "Miami Heat",
      score: 98
    }
  ];
  return (
    <Layout>
      <ContentWrapper style={{ width: "80%" }}>
        <Card results={results} />
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
