import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import Card from "../Card";
import { SAS, MIA } from "react-nba-logos";
import moment from "moment";
import styled from "styled-components";
import axios from "axios";
import _ from "lodash";
import teams from "../../data/teams";
import * as logos from "react-nba-logos";

const ContentWrapper = styled.div`
  margin: 0px auto;
  margin-top: 2em;
`;

const findTeam = (teams, teamId) =>
  _.find(teams, team => team.teamId === teamId);

const Scoreboard = props => {
  const [teamScores, setTeamScores] = useState([]);
  useEffect(() => {
    const setScores = games => {
      const scores = games.map(game => {
        const { hTeam, vTeam, startTimeEastern } = game;
        const homeTeamInfo = findTeam(teams, hTeam.teamId);
        const visitingTeamInfo = findTeam(teams, vTeam.teamId);
        const HomeLogo = logos[homeTeamInfo.tricode];
        console.log("here", HomeLogo, homeTeamInfo.triCode, homeTeamInfo);
        const VisitingLogo = logos[visitingTeamInfo.tricode];
        return {
          home: {
            score: hTeam.score,
            name: homeTeamInfo.fullName,
            logo: <HomeLogo size={30} />
          },
          visitor: {
            score: vTeam.score,
            name: visitingTeamInfo.fullName,
            logo: <VisitingLogo size={30} />
          }
        };
      });
      console.log(scores);
      setTeamScores(scores);
    };

    const fetchGames = async () => {
      const fmtDate = moment().format("YYYYMMDD");
      const res = await axios.get(`/.netlify/functions/nba?date=${fmtDate}`);
      const games = _.get(res, "data.games.games");
      setScores(games);
      console.log(games);
      setTimeout(fetchGames, 20000);
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
  console.log("scores??", teamScores);
  return (
    <Layout>
      <ContentWrapper style={{ width: "80%" }}>
        <Card scores={teamScores} results={results} />
      </ContentWrapper>
    </Layout>
  );
};

export default Scoreboard;
