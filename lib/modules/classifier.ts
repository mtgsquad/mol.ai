import { Max } from "../models/max";
import { Julia } from "../models/julia";

export class Classifier {
  private text: string;
  private max: Max;
  private julia: Julia;

  constructor(text: string) {
    this.text = text;
    this.max = new Max(text);
    this.julia = new Julia(text);
  }

  getResponses(): { maxResponse: string; juliaResponse: string } {
    return {
      maxResponse: this.max.getTone() as string,
      juliaResponse: this.julia.getMessageType() as string,
    };
  }
}
