import React from "react";
import { SAS } from "react-nba-logos";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 20%;
  display: inline-block;
`;

const Card = props => (
  <div className="card">
    <div className="card-content">
      <div className="content">
        <CardDiv>
          <SAS size={30} />
        </CardDiv>
        <CardDiv style={{ width: "60%" }}>
          <span>San Antonio Spurs</span>
        </CardDiv>
        <CardDiv>
          <span>135</span>
        </CardDiv>

        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
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
