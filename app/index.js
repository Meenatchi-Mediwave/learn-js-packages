// console.log(process.env.MY_NAME);
// const username = process.argv[2];
// console.log(username);

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

function main() {
  const user = getUsername();
  const sentenceCasedName = makeSentenceCase(user);
  console.log(sentenceCasedName);
}

// start
main();
