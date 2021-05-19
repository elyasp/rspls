import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100vh",

      "& > div": {
        textAlign: "center",
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.primary,
    },
    results: {
      margin: "auto",
      "& > div": {
        display: "flex",
        justifyContent: "center",

        "&:last-child": {
          marginTop: theme.spacing(10),
        },
      },
    },
    mobile: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    desktop: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  })
);
