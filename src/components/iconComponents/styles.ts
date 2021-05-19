import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      placeItems: "center",
      justifySelf: "center",
      alignSelf: "center",
      width: "130px",
      margin: "10px",
      height: "130px",
      borderRadius: "50%",
      boxShadow: "0px 0px 20px 8px rgba(0, 0, 0, 0.2)",
      border: "solid 10px",
      [theme.breakpoints.down("sm")]: {
        width: "110px",
        height: "110px",
      },

      "& > svg": {
        maxWidth: "65px",
        maxHeight: "65px",
      },
    },
    lizard: {
      gridArea: "liz",
      borderColor: "#395739",
      backgroundColor: "#cffccf",
      alignSelf: "start",
    },
    paper: {
      gridArea: "paper",
      borderColor: "#2a5361",
      backgroundColor: "#cff3ff",
      alignSelf: "start",
    },
    rock: {
      gridArea: "rock",
      borderColor: "#424242",
      backgroundColor: "#c9c9c9",
      justifySelf: "start",
    },
    scissors: {
      gridArea: "sciss",
      borderColor: "#6e0007",
      backgroundColor: "#ffc4c8",
      justifySelf: "end",
    },
    spock: {
      gridArea: "spock",
      borderColor: "#463b5e",
      backgroundColor: "#e1d4ff",
      alignSelf: "start",
    },
    rules: {
      display: "grid",
      placeItems: "center",
      justifySelf: "center",
      alignSelf: "center",
      width: "100%",
      height: "100%",

      "& > svg": {
        width: "90%",
        height: "90%",
      },
    },
  })
);
