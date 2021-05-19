import * as gameActions from "../game/gameActions";
import { game } from "../game/gameReducer";

describe("Game Actions", () => {
  it("should create an action to start the game", () => {
    const expectedAction = {
      type: "IS_GAME_STARTED",
      payload: true,
    };

    expect(gameActions.startGame(true)).toEqual(expectedAction);
  });

  it("should create an action to add picks", () => {
    const pickOne = "rock";
    const pickTwo = "scissors";

    const expectedAction = {
      type: "ADD_PLAYER_PICKS",
      payload: { playerOne: "rock", playerTwo: "scissors" },
    };

    expect(gameActions.addPicks(pickOne, pickTwo)).toEqual(expectedAction);
  });

  it("should create an action returning the outcome string", () => {
    const outcome = "Spock vaporizes rock!";

    const expectedAction = {
      type: "CURRENT_GAME_SITUATION",
      payload: "Spock vaporizes rock!",
    };

    expect(gameActions.registerOutcome(outcome)).toEqual(expectedAction);
  });

  it("should action a game reset", () => {
    const expectedAction = { type: "RESET_GAME" };

    expect(gameActions.resetGame()).toEqual(expectedAction);
  });
});

describe("Game reducer", () => {
  const initialState = {
    hasStarted: false,
    picks: {},
    situation: "",
  };

  it("should return the initial state", () => {
    expect(game(undefined, {})).toEqual(initialState);
  });

  it("should handle starting game", () => {
    expect(game(initialState, gameActions.startGame(true))).toEqual({
      ...initialState,
      hasStarted: true,
    });
  });

  it("should handle adding picks", () => {
    expect(game(initialState, gameActions.addPicks("rock", "paper"))).toEqual({
      ...initialState,
      picks: { playerOne: "rock", playerTwo: "paper" },
    });
  });

  it("should handle returning outcome", () => {
    expect(
      game(
        initialState,
        gameActions.registerOutcome("Scissors decapitate Lizard!")
      )
    ).toEqual({
      ...initialState,
      situation: "Scissors decapitate Lizard!",
    });
  });
});
