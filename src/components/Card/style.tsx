import React from "react";

import styled from "styled-components";
import { SAS } from "react-nba-logos";
import * as logo from "react-nba-logos";

const CardDiv = styled.div`
  width: 20%;
  display: inline-block;
  text-align: center;
  vertical-align: ${props => (props.middle ? "middle" : "baseline")};
  width: ${props => props.width};
`;

const ContentDiv = styled.div`
  height: 35px;
`;

const Card = ({ results, scores }) => {
  console.log("card scores", scores);
  return (
    <div>
      {scores &&
        scores.map(({ home, visitor }) => {
          return (
            <div
              key={home.name}
              className="card"
              style={{ marginBottom: "1em" }}
            >
              <div className="card-content">
                <ContentDiv key={home.name}>
                  <CardDiv middle width="20%">
                    {home.logo}
                  </CardDiv>
                  <CardDiv width="60%">{home.name}</CardDiv>
                  <CardDiv width="20%">
                    <span>{home.score}</span>
                  </CardDiv>
                </ContentDiv>

                <ContentDiv key={visitor.name}>
                  <CardDiv middle width="20%">
                    {visitor.logo}
                  </CardDiv>
                  <CardDiv width="60%">{visitor.name}</CardDiv>
                  <CardDiv width="20%">
                    <span>{visitor.score}</span>
                  </CardDiv>
                </ContentDiv>
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
        })}
    </div>
  );
};

export default Card;
