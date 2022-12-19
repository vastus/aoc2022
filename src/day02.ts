import fs from "fs";

const testInput = `
A Y
B X
C Z
`;

const typeScores: Record<string, number> = {
  A: 1,  // rock
  B: 2,  // paper
  C: 3,  // scissors
  X: 1,
  Y: 2,
  Z: 3,
};

const roundScores = {
  win: 6,
  draw: 3,
  loss: 0,
};

const parseInput = (input: string) =>
  input
    .split("\n")
    .filter((x) => x)
    .map((i) => i.split(" "));

const Result = {
  TIE: 3,
  WIN: 6,
  LOSE: 0,
}

const results = {
  [1-1]: Result.TIE,
  [1-2]: Result.WIN,
  [1-3]: Result.LOSE,

  [2-1]: Result.LOSE,
  [2-2]: Result.TIE,
  [2-3]: Result.WIN,

  [3-1]: Result.WIN,
  [3-2]: Result.LOSE,
  [3-3]: Result.TIE,
}

const sum = (a: number, b: number) =>
  a + b

function roundResult(they: string, us: string) {
  const a = typeScores[they]
  const b = typeScores[us]
  return results[a - b]
}

function solve1(input: string) {
  const rounds = parseInput(input)
  return rounds.map(([they, us]) => {
    const roundRes = roundResult(they, us)
    const score = typeScores[us]
    const endResult = roundRes + score
    return endResult
  })
  .reduce(sum)
}

function main() {
  const input = fs.readFileSync("./day02.in", "utf8");
  console.log(solve1(input));
  // console.log(solve2(input));
}

main();
