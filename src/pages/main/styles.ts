import styled from "styled-components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { twirlText } from "../../styles/keyframes";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "inherit",
      paddingBottom: theme.spacing(5),
      flexGrow: 1,
      "& > div": {
        textAlign: "center",
      },
    },
    icons: {
      margin: "auto",
    },
    players: {
      maxWidth: "600px",
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      "& label": {
        fontStyle: "italic",
        color: theme.palette.text.primary,
        "&.Mui-focused": { color: theme.palette.text.secondary },
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        maxWidth: "300px",
      },
    },
  })
);

export const StyledTypography = styled(Typography)`
  animation: ${twirlText} 7s linear infinite;
` as typeof Typography;
