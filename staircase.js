"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  // Write your code here
  for (var i = 0; i < n; i++) {
    for (var j = n; j > -1; j--) {
      if (j > i) {
        if (j === i + 1) {
          continue;
        }
        process.stdout.write(" ");
      } else {
        process.stdout.write("#");
      }
    }
    process.stdout.write("\n");
  }
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  staircase(n);
}
