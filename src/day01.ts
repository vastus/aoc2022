import fs from 'fs'

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
`

function solve1(input: string) {
  const values = input
    .trim()
    .split('\n\n')
    .map(entry => {
      return entry
        .split('\n')
        .map(x => parseInt(x, 10))
        .reduce((acc, elem) => acc + elem)
    })
    .reduce((acc, elem) => elem > acc ? elem : acc)

  return values
}

function main() {
  const input = fs.readFileSync('./day01.in', 'utf8')
  const res = solve1(input)
  console.log(res)
}

main()
