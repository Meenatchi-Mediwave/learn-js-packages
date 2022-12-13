import chalk from "chalk";
// const chalk = require('chalk');

function getUsername() {
  let username = "default";

  // if we have some value set from env variable
  // use it
  // MY_NAME=meenatchi node app
  if (process.env.MY_NAME) {
    if (process.env.MY_NAME.trim()) {
      username = process.env.MY_NAME.trim();
    }
  }

  // if we have the name passed as an argument
  // node app meenatchi
  if (process.argv.length == 3) {
    var thirdArg = process.argv[2].trim();
    if (thirdArg) {
      username = process.argv[2];
    }
  }

  return username;
}

function makeSentenceCase(str) {
  const firstChar = str[0];
  const remainingChars = str.slice(1);
  const casedWord = firstChar.toUpperCase() + remainingChars;
  return casedWord;
}

function getRandomColor() {
  const colors = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "blackBright",
    "redBright",
    "greenBright",
    "yellowBright",
    "blueBright",
    "magentaBright",
    "cyanBright",
    "whiteBright",
  ];

  const colorLength = colors.length;
  const randomIndex = Math.floor(Math.random() * colorLength);

  return colors[randomIndex];
}

function printInRandomColor(str) {
  const randomColor = getRandomColor();
  // chalk.blue(str)
  // chalk['blue'](str)

  // var color = 'blue'
  // chalk[color](str)
  const coloredText = chalk[randomColor](str);
  console.log(coloredText);
}

export { printInRandomColor, makeSentenceCase, getUsername };
