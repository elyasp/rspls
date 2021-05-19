import React from "react";
import * as Icons from "../iconComponents";
import { Tools } from "../../constants/gameRules";

interface IconProps {
  icon: Tools;
}

export const ServeIcon: React.FC<IconProps> = ({ icon }) => {
  return (
    <>
      {icon === "spock" && <Icons.StyledSpock />}
      {icon === "rock" && <Icons.StyledRock />}
      {icon === "paper" && <Icons.StyledPaper />}
      {icon === "lizard" && <Icons.StyledLizard />}
      {icon === "scissors" && <Icons.StyledScissors />}
    </>
  );
};
