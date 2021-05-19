import React, { useState, useEffect } from "react";
import * as gameActions from "../../redux/game/gameActions";
import { useAppSelector } from "../../hooks";
import { Dialog, Typography } from "@material-ui/core";
import { ActionButton } from "../";
import { useStyles } from "./styles";
import { Player } from "../player";

interface ModalProps {
  dispatch: Function;
}

export const WinnerModal: React.FC<ModalProps> = ({ dispatch = () => {} }) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [winner, setWinner] = useState<string[]>([]);
  const { score, players } = useAppSelector((state) => state);

  useEffect(() => {
    setTimeout(() => {
      if (score.playerOneScore + score.playerTwoScore >= 5) {
        if (score.playerOneScore > score.playerTwoScore) {
          setWinner([players.playerOne, "http://placekitten.com/300/300"]);
        } else {
          setWinner([players.playerTwo, "http://placekitten.com/g/300/300"]);
        }
        setOpen(true);
      }
    }, 1000);
  }, [score, players]);

  return (
    <>
      <Dialog
        open={open}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(38, 155, 155, 0.625)",
          },
        }}
      >
        <div className={classes.root}>
          <Typography variant="h3">WINNER</Typography>
          <Player name={winner[0]} avatar={winner[1]} />
          <ActionButton
            variant="reset"
            onClick={() => dispatch(gameActions.resetGame())}
          >
            <Typography variant="h5">Play again</Typography>
          </ActionButton>
        </div>
      </Dialog>
    </>
  );
};
