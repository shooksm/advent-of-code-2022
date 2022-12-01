import fs from 'fs';
import { groupDataAndSort, puzzleOne, puzzleTwo } from './index';

const exampleData = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const data = fs.readFileSync('./src/day-01/input.txt', 'utf8');

describe('Day 1', () => {
  describe('groupDataAndSort', () => {
    it('should group data, convert to number and sort ascending', () => {
      expect(groupDataAndSort(exampleData)).toEqual([
        4000, 6000, 10000, 11000, 24000,
      ]);
    });
  });

  describe('Puzzle 1', () => {
    it('should return 24000 with example input', () => {
      expect(puzzleOne(exampleData)).toBe(24000);
    });

    it('should calculate the correct answer', () => {
      expect(puzzleOne(data)).toMatchSnapshot();
    });
  });

  describe('Puzzle 2', () => {
    it('should return 45000 with example input', () => {
      expect(puzzleTwo(exampleData)).toBe(45000);
    });

    it('should calculate the correct answer', () => {
      expect(puzzleTwo(data)).toMatchSnapshot();
    });
  });
});
