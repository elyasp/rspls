import { GameRules } from "../constants/gameRules";
import { scorePlayerOne, scorePlayerTwo } from "../redux/score/scoreActions";

export const getResults = (one, two, dispatch) => {
  let handOne = GameRules[one].tool;
  let handTwo = GameRules[two].tool;
  let punchline;

  if (GameRules[one].beats.includes(handTwo)) {
    punchline =
      GameRules[one].punchlines[GameRules[one].beats.indexOf(handTwo)];
    dispatch(scorePlayerOne());
  } else if (GameRules[two].beats.includes(handOne)) {
    punchline =
      GameRules[two].punchlines[GameRules[two].beats.indexOf(handOne)];
    dispatch(scorePlayerTwo());
  } else {
    punchline = "It's a draw!";
  }

  return { handOne, handTwo, punchline };
};
