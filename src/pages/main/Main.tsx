import React, { useState } from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import Zoom from "react-reveal/Zoom";
import { StyledTypography, useStyles } from "./styles";
import { useAppDispatch } from "../../hooks";
import { addPlayers } from "../../redux/players/playerActions";
import { startGame } from "../../redux/game/gameActions";
import { ActionButton, IconGridContainer } from "../../components";

export const Main: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [playerOne, setPlayerOne] = useState<string>();
  const [playerTwo, setPlayerTwo] = useState<string>();

  const handleStartGame = (): void => {
    dispatch(addPlayers(playerOne, playerTwo));
    dispatch(startGame(true));
  };

  return (
    <>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <StyledTypography variant="h1">RSPLS</StyledTypography>
        </Grid>
        <Grid item xs={12}>
          <IconGridContainer />
        </Grid>

        <Grid item xs={12} className={classes.players}>
          <Zoom left delay={200}>
            <TextField
              label="Player 1"
              onChange={(e) => {
                setPlayerOne(e.target.value);
              }}
            />
          </Zoom>
          <Zoom right delay={900}>
            <TextField
              label="Player 2"
              onChange={(e) => {
                setPlayerTwo(e.target.value);
              }}
            />
          </Zoom>
        </Grid>
        <Grid xs={12}>
          <Zoom bottom delay={1800}>
            <ActionButton variant="start" onClick={() => handleStartGame()}>
              <Typography variant="h2">start playing</Typography>
            </ActionButton>
          </Zoom>
        </Grid>
      </Grid>
    </>
  );
};
