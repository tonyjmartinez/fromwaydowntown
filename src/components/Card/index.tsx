import React from "react";
import Card from "./style";

const CardContainer = ({ scores, cardStyle }) => (
  <Card scores={scores} cardStyle={cardStyle} />
);

export default CardContainer;
