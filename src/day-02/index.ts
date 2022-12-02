const calculateScore = (playA: string, playB: string): number => {
  const choiceScore: number = playB === 'X' ? 1 : playB === 'Y' ? 2 : 3;

  // Tie
  if (
    (playA === 'A' && playB === 'X') ||
    (playA === 'B' && playB === 'Y') ||
    (playA === 'C' && playB === 'Z')
  ) {
    return choiceScore + 3;
  }

  // Win
  if (
    (playA === 'A' && playB === 'Y') ||
    (playA === 'B' && playB === 'Z') ||
    (playA === 'C' && playB === 'X')
  ) {
    return choiceScore + 6;
  }

  // Lose
  return choiceScore;
};

const calculateMove = (playA: string, playB: string): string => {
  // X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win.

  // Tie
  if (playB === 'Y') return playA === 'A' ? 'X' : playA === 'B' ? 'Y' : 'Z';

  // Win
  if (playB === 'Z') return playA === 'A' ? 'Y' : playA === 'B' ? 'Z' : 'X';

  // Lose
  return playA === 'A' ? 'Z' : playA === 'B' ? 'X' : 'Y';
};

const scoringMapPuzzleOne = new Map();
const scoringMapPuzzleTwo = new Map();

// A for Rock, B for Paper, and C for Scissors
['A', 'B', 'C'].forEach((playA: string) => {
  // X for Rock, Y for Paper, and Z for Scissors
  ['X', 'Y', 'Z'].forEach((playB: string) => {
    scoringMapPuzzleOne.set(`${playA} ${playB}`, calculateScore(playA, playB));
    scoringMapPuzzleTwo.set(
      `${playA} ${playB}`,
      calculateScore(playA, calculateMove(playA, playB))
    );
  });
});

const puzzleOne = (input: string): number | undefined => {
  return input
    .split(/\n/)
    .map((game: string): number => scoringMapPuzzleOne.get(game))
    .reduce((acc: number, curr: number) => acc + curr, 0);
};

const puzzleTwo = (input: string): number | undefined => {
  return input
    .split(/\n/)
    .map((game: string): number => scoringMapPuzzleTwo.get(game))
    .reduce((acc: number, curr: number) => acc + curr, 0);
};

export { puzzleOne, puzzleTwo, scoringMapPuzzleOne, scoringMapPuzzleTwo };
