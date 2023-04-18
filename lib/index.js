"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Julia = exports.Max = exports.Classifier = void 0;
const classifier_1 = require("./modules/classifier");
Object.defineProperty(exports, "Classifier", {
  enumerable: true,
  get: function () {
    return classifier_1.Classifier;
  },
});
const julia_1 = require("./models/julia");
Object.defineProperty(exports, "Julia", {
  enumerable: true,
  get: function () {
    return julia_1.Julia;
  },
});
const max_1 = require("./models/max");
Object.defineProperty(exports, "Max", {
  enumerable: true,
  get: function () {
    return max_1.Max;
  },
});
