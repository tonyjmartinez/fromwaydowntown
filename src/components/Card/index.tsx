import React from "react";
import Card from "./style";

const CardContainer = ({ results, scores }) => (
  <Card scores={scores} results={results} />
);

export default CardContainer;
