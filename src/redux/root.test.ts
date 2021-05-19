import rootReducer from "./rootReducer";

describe("Root reducer", () => {
  it("should reset the game", () => {
    const expectedAction = { type: "RESET_GAME" };

    const initialState = {
      players: {
        playerOne: "Elyas",
        playerTwo: "Popal",
      },
      game: {
        hasStarted: true,
        picks: {
          playerOne: "spock",
          playerTwo: "lizard",
        },
        situation: "Lizard poisons Spock!",
      },
      score: {
        playerOneScore: 2,
        playerTwoScore: 1,
      },
    };

    const expectedEmptyState = {
      players: {},
      game: { hasStarted: false, picks: {}, situation: "" },
      score: { playerOneScore: 0, playerTwoScore: 0 },
    };

    expect(rootReducer(initialState, expectedAction)).toEqual(
      expectedEmptyState
    );
  });
});
