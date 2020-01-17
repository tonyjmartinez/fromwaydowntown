import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 20%;
  display: inline-block;
  text-align: center;
  vertical-align: ${props => (props.middle ? "middle" : "baseline")};
  width: ${props => props.width};
`;

const ContentDiv = styled.div`
  height: 35px;
  margin-bottom: 1em;
`;

const GameStateDiv = styled.div`
  text-align: center;
  width: 100%;
`;

const Card = ({ scores, cardStyle }) => {
  console.log("card scores", scores);
  return (
    <div style={cardStyle}>
      {scores &&
        scores.map(({ home, visitor, gameState, active }) => {
          return (
            <div
              key={home.name}
              className="card"
              style={{ marginBottom: "1em" }}
            >
              <div className="card-content">
                <ContentDiv key={home.name}>
                  <CardDiv middle width="10%">
                    {home.logo}
                  </CardDiv>
                  <CardDiv width="80%">{home.name}</CardDiv>
                  <CardDiv width="10%">
                    <span>{home.score}</span>
                  </CardDiv>
                </ContentDiv>

                <ContentDiv key={visitor.name}>
                  <CardDiv middle width="10%">
                    {visitor.logo}
                  </CardDiv>
                  <CardDiv width="80%">{visitor.name}</CardDiv>
                  <CardDiv width="10%">
                    <span>{visitor.score}</span>
                  </CardDiv>
                  <br />
                </ContentDiv>
                <GameStateDiv>
                  <span
                    className={`tag ${
                      active ? "is-success" : "is-danger"
                    } is-light`}
                  >
                    {gameState}
                  </span>
                </GameStateDiv>
              </div>

              {/* <footer className="card-footer">
                <a href="#" className="card-footer-item">
                  Save
                </a>
                <a href="#" className="card-footer-item">
                  Edit
                </a>
                <a href="#" className="card-footer-item">
                  Delete
                </a>
              </footer> */}
            </div>
          );
        })}
    </div>
  );
};

export default Card;
