import React, { ReactElement } from "react";
import { StyledButton } from "./styles";

export interface ActionButtonProps {
  onClick?: Function;
  variant: "fire" | "start" | "reset" | "help";
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick = () => {},
  children,
  variant,
}): ReactElement => {
  return (
    <>
      <StyledButton variant={variant} onClick={() => onClick()}>
        {children}
      </StyledButton>
    </>
  );
};
