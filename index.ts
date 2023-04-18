import { Classifier, Max, Julia } from "./lib/index";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your message: ", (userInput: string) => {
  const classifier = new Classifier(userInput);
  const { maxResponse, juliaResponse } = classifier.getResponses();

  console.log(`User input: ${userInput}`);
  console.log(`Max's response: ${maxResponse}`);
  console.log(`Julia's response: ${juliaResponse}`);

  readline.close();
});
