export type Tools = "scissors" | "paper" | "spock" | "rock" | "lizard";

export interface IGameRules {
  tool: Tools;
  beats: Tools[];
  punchlines: string[];
}

export const GameRules: IGameRules[] = [
  {
    tool: "scissors",
    beats: ["paper", "lizard"],
    punchlines: ["Scissors cut Paper!", "Scissors decapitate Lizard!"],
  },
  {
    tool: "paper",
    beats: ["rock", "spock"],
    punchlines: ["Paper covers Rock!", "Paper disproves Spock!"],
  },
  {
    tool: "rock",
    beats: ["scissors", "lizard"],
    punchlines: ["Rock crushes Scissors!", "Rock crushes Lizard!"],
  },
  {
    tool: "spock",
    beats: ["scissors", "rock"],
    punchlines: ["Spock smashes Scissors!", "Spock vaporizes Rock!"],
  },
  {
    tool: "lizard",
    beats: ["spock", "paper"],
    punchlines: ["Lizard poisons Spock!", "Lizard eats Paper!"],
  },
];
