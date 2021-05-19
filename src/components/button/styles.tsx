import Button, { ButtonProps } from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { Omit } from "@material-ui/types";
import { ActionButtonProps } from "./ActionButton";

export const StyledButton = styled(
  ({
    variant,
    ...props
  }: ActionButtonProps & Omit<ButtonProps, keyof ActionButtonProps>) => {
    // @ts-ignore
    return <Button {...props} />;
  }
)({
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  margin: 10,
  border: 0,
  color: "#fff",
  transition: "all 150ms linear",
  "&:hover": {
    filter: "hue-rotate(-15deg)",
    transition: "all 200ms linear",
  },
  height: ({ variant }: ActionButtonProps) => (variant === "help" ? 40 : 55),
  width: ({ variant }: ActionButtonProps) =>
    variant === "help" ? 40 : "inherit",
  padding: ({ variant }: ActionButtonProps) =>
    variant === "help" ? 30 : "10px 30px",
  borderRadius: ({ variant }: ActionButtonProps) =>
    variant === "help" ? "50%" : 3,
  background: ({ variant }: ActionButtonProps) =>
    variant === "start"
      ? "linear-gradient(45deg, #9c6bfe 30%, #53cbff 90%)"
      : variant === "fire"
      ? "linear-gradient(45deg, #ff3535 30%, #de7659 90%)"
      : variant === "reset"
      ? "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"
      : variant === "help"
      ? "#d1363c"
      : "transparent",
});
