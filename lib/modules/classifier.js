"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classifier = void 0;
const max_1 = require("../models/max");
const julia_1 = require("../models/julia");
class Classifier {
  constructor(text) {
    this.text = text;
    this.max = new max_1.Max(text);
    this.julia = new julia_1.Julia(text);
  }
  getResponses() {
    return {
      maxResponse: this.max.getTone(),
      juliaResponse: this.julia.getMessageType(),
    };
  }
}
exports.Classifier = Classifier;
