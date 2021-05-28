import React from "react";
import * as gameActions from "../../redux/game/gameActions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import * as utils from "../../utils";
import { Grid, Typography } from "@material-ui/core";
import { Bounce, Zoom } from "react-reveal";
import { useStyles } from "./styles";
import {
  ActionButton,
  Player,
  Score,
  ServeIcon,
  WinnerModal,
  HelpModal,
} from "../../components";

export const Gameplay: React.FC = () => {
  const dispatch = useAppDispatch();
  const { game, score, players } = useAppSelector((state) => state);
  const classes = useStyles();

  const handleRound = (): void => {
    const one = utils.randomOne();
    const two = utils.randomTwo();

    const { handOne, handTwo, punchline } = utils.getResults(
      one,
      two,
      dispatch
    );

    dispatch(gameActions.addPicks(handOne, handTwo));
    dispatch(gameActions.registerOutcome(punchline));
  };

  return (
    <>
      <Grid container className={classes.root} spacing={1}>
        {/* Mobile view item, hidden on md */}
        <Grid item xs={12} className={classes.mobile}>
          <Grid container>
            <Grid item xs={4}>
              <Player
                name={players.playerOne}
                avatar="http://placekitten.com/300/300"
              />
            </Grid>
            <Grid item xs={4}>
              <Score
                scoreOne={score.playerOneScore}
                scoreTwo={score.playerTwoScore}
              />
            </Grid>
            <Grid item xs={4}>
              <Player
                name={players.playerTwo}
                avatar="http://placekitten.com/g/300/300"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Desktop view item, visible on sm */}
        <Grid item xs={12} className={classes.desktop}>
          <Score
            scoreOne={score.playerOneScore}
            scoreTwo={score.playerTwoScore}
          />
        </Grid>
        <Grid item xs={4} className={classes.desktop}>
          <Player
            name={players.playerOne}
            avatar="http://placekitten.com/300/300"
          />
        </Grid>
        <Grid item xs={4} className={classes.results}>
          <Zoom delay={200} duration={300} spy={game.situation}>
            <Typography variant="h5">{game.situation}</Typography>
          </Zoom>

          <div>
            <Bounce left spy={game.picks.playerOne} duration={600}>
              <ServeIcon icon={game.picks.playerOne} />
            </Bounce>
            <Bounce right spy={game.picks.playerTwo} duration={600}>
              <ServeIcon icon={game.picks.playerTwo} />
            </Bounce>
          </div>
        </Grid>
        <Grid item xs={4} className={classes.desktop}>
          <Player
            name={players.playerTwo}
            avatar="http://placekitten.com/g/300/300"
          />
        </Grid>
        <Grid item xs={12}>
          <ActionButton variant="fire" onClick={() => handleRound()}>
            <Typography variant="h5">NOW!</Typography>
          </ActionButton>
        </Grid>
      </Grid>
      <HelpModal>
        <h1>?</h1>
      </HelpModal>
      <WinnerModal dispatch={dispatch} />
    </>
  );
};
