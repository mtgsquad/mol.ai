"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./lib/index");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Enter your message: ", (userInput) => {
  const classifier = new index_1.Classifier(userInput);
  const { maxResponse, juliaResponse } = classifier.getResponses();
  console.log(`User input: ${userInput}`);
  console.log(`Max's response: ${maxResponse}`);
  console.log(`Julia's response: ${juliaResponse}`);
  readline.close();
});
