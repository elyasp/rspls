import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "center",
    },
    label: {
      padding: "0 1em",
      position: "absolute",
      left: "47%",
      top: "1em",
      backgroundColor: "#ff474a",
      borderRadius: 4,
    },
    paper: {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.info.main,
      fontSize: 40,
      fontWeight: 800,
      minWidth: "2em",
      minHeight: "1em",
      marginTop: theme.spacing(2),
      padding: theme.spacing(1),
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: 20,
      },
    },
  })
);
