"use strict";

const fs = require("fs");

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let x = s.split(":");

  let z = x[2] + "";
  let y = z.split("");

  if (y[2] === "P") {
    if (x[0] !== "12") {
      x[0] = Number(x[0]) + 12;
    }
  }
  if (y[2] === "A") {
    if (x[0] === "12") {
      x[0] = "00";
    }
  }
  let converted_time = x[0] + ":" + x[1] + ":" + y[0] + y[1];
  return converted_time;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
