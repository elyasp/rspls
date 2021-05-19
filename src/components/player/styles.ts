import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      margin: theme.spacing(2),
    },
    avatar: {
      [theme.breakpoints.up("md")]: {
        width: 200,
        height: 200,
      },
      [theme.breakpoints.down("sm")]: {
        width: 100,
        height: 100,
      },
      [theme.breakpoints.down("xs")]: {
        width: 70,
        height: 70,
      },
    },
    name: {
      marginTop: "1rem",
      color: theme.palette.info.main,
    },
  })
);
