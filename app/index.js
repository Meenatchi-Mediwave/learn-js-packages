// console.log(process.env.MY_NAME);
// const username = process.argv[2];
// console.log(username);

import { getUsername, makeSentenceCase, printInRandomColor } from "./utils.js";

function main() {
  const user = getUsername();
  const sentenceCasedName = makeSentenceCase(user);
  printInRandomColor(sentenceCasedName);
}

// start
main();
