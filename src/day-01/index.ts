const groupDataAndSort = (input: string): number[] => {
  return input
    .split(/\n/)
    .reduce((acc: number[], curr) => {
      if (curr === '') {
        return [...acc, 0];
      }
      if (Array.isArray(acc)) {
        return [
          ...(acc.length > 1 ? acc.slice(0, -1) : []),
          (acc.at(-1) ?? 0) + Number(curr),
        ];
      }
      return acc;
    }, [])
    .sort((a: number, b: number) => a - b);
};

const puzzleOne = (input: string): number | undefined => {
  return groupDataAndSort(input).at(-1);
};

const puzzleTwo = (input: string): number | undefined => {
  return groupDataAndSort(input)
    .reverse()
    .slice(0, 3)
    .reduce((acc, curr) => acc + curr, 0);
};

export { groupDataAndSort, puzzleOne, puzzleTwo };
