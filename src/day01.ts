import fs from "fs";

const testInput = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

const sum = (acc: number, elem: number) => acc + elem;

function solve1(input: string) {
  const values = input
    .trim()
    .split("\n\n")
    .map((entry) => {
      return entry
        .split("\n")
        .map((x) => parseInt(x, 10))
        .reduce(sum);
    })
    .reduce((acc, elem) => (elem > acc ? elem : acc));

  return values;
}

function solve2(input: string) {
  const values = input
    .trim()
    .split("\n\n")
    .map((entry) => {
      return entry
        .split("\n")
        .map((x) => parseInt(x, 10))
        .reduce(sum);
    })
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce(sum);

  return values;
}

function main() {
  const input = fs.readFileSync("./foo.in", "utf8");
  console.log(solve1(input));
  console.log(solve2(input));
}

main();
