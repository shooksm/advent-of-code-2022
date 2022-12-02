import {
  puzzleOne,
  puzzleTwo,
  scoringMapPuzzleOne,
  scoringMapPuzzleTwo,
} from './index';
import fs from 'fs';

const exampleData = `A Y
B X
C Z`;

const data = fs.readFileSync('./src/day-02/input.txt', 'utf8');

describe('Day 2', () => {
  describe('scoringMap', () => {
    it('should map out the scoring combinations', () => {
      expect(scoringMapPuzzleOne.size).toBe(9);
      expect(scoringMapPuzzleOne).toMatchSnapshot();
    });
    it('should map out the scoring combinations with additional calculate move by player b', () => {
      expect(scoringMapPuzzleTwo.size).toBe(9);
      expect(scoringMapPuzzleTwo).toMatchSnapshot();
    });
  });

  describe('Puzzle 1', () => {
    it('should return 15 with example input', () => {
      expect(puzzleOne(exampleData)).toBe(15);
    });

    it('should calculate the correct answer', () => {
      expect(puzzleOne(data)).toMatchSnapshot();
    });
  });

  describe('Puzzle 2', () => {
    it('should return 12 with example input', () => {
      expect(puzzleTwo(exampleData)).toBe(12);
    });

    it('should calculate the correct answer', () => {
      expect(puzzleTwo(data)).toMatchSnapshot();
    });
  });
});
