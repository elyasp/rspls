import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      height: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 20,

      "& > h3": {
        color: theme.palette.text.secondary,
      },
    },
    helpModal: {
      width: "400px",
      height: "400px",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    openButton: {
      margin: "20px",
      position: "absolute",
      bottom: 0,
      left: 0,
    },
  })
);
