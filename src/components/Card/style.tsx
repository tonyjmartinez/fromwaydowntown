import React from "react";

import styled from "styled-components";

const CardDiv = styled.div`
  width: 20%;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  width: ${props => props.width};
`;

const ContentDiv = styled.div`
  height: 35px;
`;

const Card = ({ results }) => (
  <div className="card">
    <div className="card-content">
      {results.map(({ logo, team, score }) => (
        <ContentDiv key={team}>
          <CardDiv width="20%">{logo}</CardDiv>
          <CardDiv width="60%">{team}</CardDiv>
          <CardDiv width="20%">
            <span>{score}</span>
          </CardDiv>
        </ContentDiv>
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
