import React from "react";
import { SAS, MIA } from "react-nba-logos";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 20%;
  display: inline-block;
  text-align: center;
`;

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

const Card = props => (
  <div className="card">
    <div className="card-content">
      {results.map(({ logo, team, score }) => (
        <div className="content" style={{ height: "30px" }}>
          <CardDiv style={{ verticalAlign: "middle" }}>{logo}</CardDiv>
          <CardDiv style={{ width: "60%" }}>{team}</CardDiv>
          <CardDiv>
            <span>{score}</span>
          </CardDiv>
        </div>
      ))}
    </div>
    <footer className="card-footer">
      <a href="#" className="card-footer-item">
        Save
      </a>
      <a href="#" className="card-footer-item">
        Edit
      </a>
      <a href="#" className="card-footer-item">
        Delete
      </a>
    </footer>
  </div>
);

export default Card;
