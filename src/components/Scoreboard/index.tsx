import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import Card from "../Card";
import { SAS, MIA } from "react-nba-logos";
import moment from "moment";
import styled from "styled-components";
import axios from "axios";
import _ from "lodash";
import teams from "../../data/teams";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import * as logos from "react-nba-logos";

const ContentWrapper = styled.div`
  margin: 0px auto;
  margin-top: 2em;
`;
const getNumberWithOrdinal = n => {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
const findTeam = (teams, teamId) =>
  _.find(teams, team => team.teamId === teamId);
const large = useMediaQuery("(min-width:900pix)");
const medium = useMediaQuery("(min-width:");

const getGameState = game => {
  const { isGameActivated, period, clock, startTimeEastern, statusNum } = game;
  const currentPeriod = getNumberWithOrdinal(period.current);
  if (isGameActivated) {
    if (period.isHalftime) return "Halftime";
    if (period.isEndOfPeriod) return `End of the ${currentPeriod}`;
    if (statusNum === 1) return `Game Start`;
    if (period.current > 4) {
      return period.current === 5 ? "OT" : `${period.current - 4} OT`;
    }
    return `${clock} ${currentPeriod}`;
  }
  if (statusNum === 1) {
    return startTimeEastern;
  }
  if (statusNum === 3) {
    return "Final";
  }
};

const Scoreboard = props => {
  const [teamScores, setTeamScores] = useState([]);
  let width = "80%";
  if (large)
    useEffect(() => {
      const setScores = games => {
        const scores = games.map(game => {
          const { hTeam, vTeam, startTimeEastern } = game;
          const homeTeamInfo = findTeam(teams, hTeam.teamId);
          const visitingTeamInfo = findTeam(teams, vTeam.teamId);
          const HomeLogo = logos[homeTeamInfo.tricode];
          const VisitingLogo = logos[visitingTeamInfo.tricode];
          console.log("getgamestate", getGameState(game));
          return {
            gameState: getGameState(game),
            home: {
              score: hTeam.score,
              name: `${homeTeamInfo.tricode} ${homeTeamInfo.nickname}`,
              logo: <HomeLogo size={30} />
            },
            visitor: {
              score: vTeam.score,
              name: `${visitingTeamInfo.tricode} ${visitingTeamInfo.nickname}`,
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
        console.log(res.data);
        const games = _.get(res, "data.games.games");
        console.log("games?", games);

        games && setScores(games);
        console.log(games);
        setTimeout(fetchGames, 20000);
      };
      fetchGames();
    }, []);

  console.log("scores??", teamScores);
  return (
    <Layout>
      <ContentWrapper style={{ width: "80%" }}>
        <Card cardStyle={{}} scores={teamScores} />
      </ContentWrapper>
    </Layout>
  );
};

export default Scoreboard;
