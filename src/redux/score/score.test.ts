import { scorePlayerOne, scorePlayerTwo } from "../score/scoreActions";
import { score } from "../score/scoreReducer";

describe("Score Actions", () => {
  it("should create an action to add player 1 score", () => {
    const expectedAction = {
      type: "SCORE_PLAYER_ONE",
      payload: 1,
    };

    expect(scorePlayerOne()).toEqual(expectedAction);
  });

  it("should create an action to add player 1 score", () => {
    const expectedAction = {
      type: "SCORE_PLAYER_TWO",
      payload: 1,
    };

    expect(scorePlayerTwo()).toEqual(expectedAction);
  });
});

describe("Score reducer", () => {
  const initialState = {
    playerOneScore: 0,
    playerTwoScore: 0,
  };

  it("should return the initial state", () => {
    expect(score(undefined, {})).toEqual(initialState);
  });

  it("should handle scoring player one", () => {
    expect(score(initialState, scorePlayerOne())).toEqual({
      ...initialState,
      playerOneScore: 1,
    });
  });

  it("should handle scoring player two", () => {
    expect(score(initialState, scorePlayerTwo())).toEqual({
      ...initialState,
      playerTwoScore: 1,
    });
  });
});
