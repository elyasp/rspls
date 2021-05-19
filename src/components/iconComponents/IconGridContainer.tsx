import React from "react";
import styled from "styled-components";
import {
  StyledLizard,
  StyledRock,
  StyledPaper,
  StyledScissors,
  StyledSpock,
} from "../../components";

export const IconGrid = styled.div`
  margin: auto;
  width: 440px;
  height: 425px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "liz spock"
    "rock sciss"
    "paper paper";

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const IconGridContainer: React.FC = () => {
  return (
    <IconGrid>
      <StyledLizard />
      <StyledRock />
      <StyledPaper />
      <StyledScissors />
      <StyledSpock />
    </IconGrid>
  );
};
