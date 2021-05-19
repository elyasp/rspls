import React from "react";
import { Paper, Grid } from "@material-ui/core";
import { useStyles } from "./styles";

interface IScoreProps {
  scoreOne: string;
  scoreTwo: string;
}

export const Score: React.FC<IScoreProps> = ({ scoreOne, scoreTwo }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1} className={classes.root} wrap="nowrap">
        <Grid item>
          <Paper className={classes.paper} elevation={7}>
            {scoreOne}
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={7}>
            {scoreTwo}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
