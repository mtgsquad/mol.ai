export class Julia {
  private text: string;

  constructor(text: string) {
    this.text = text.toLowerCase() as string;
  }

  getMessageType(): string | undefined {
    const types = new Map<string, Set<string>>([
      [
        "question",
        new Set([
          "what",
          "when",
          "why",
          "how",
          "who",
          "?",
          "wanna",
          "let's get a",
          "do you",
          "can you",
        ]),
      ],
      ["greeting", new Set(["hi", "hello", "hey"])],
      ["goodbye", new Set(["bye", "see you", "take care"])],
      ["apology", new Set(["sorry", "my bad", "excuse me"])],
      ["gratitude", new Set(["thank you", "thanks", "appreciate"])],
      ["request", new Set(["please", "could you", "would you"])],
      ["affirmation", new Set(["yes", "correct", "indeed"])],
      ["negation", new Set(["no", "not", "never"])],
      [
        "announcement",
        new Set(["breaking news", "announcement", "news flash"]),
      ],
      ["opinion", new Set(["i think", "in my opinion", "personally"])],
    ]);

    // Check if any of the phrases match the message types
    for (const [type, phrases] of types) {
      if (this.checkForMessageType(this.text, phrases)) {
        return type;
      }
    }

    // If none of the message types match, return undefined
    return "Inconclusive: Unable to detect message type/theme.";
  }

  // Helper function to check if a text contains any phrases in a given set
  private checkForMessageType(text: string, phrases: Set<string>): boolean {
    const words = text.split(" ");
    for (const phrase of phrases) {
      let matchCount = 0;
      const phraseWords = phrase.split(" ");
      for (const word of words) {
        if (phraseWords.includes(word)) {
          matchCount++;
        }
      }
      if (matchCount >= 2) {
        return true;
      }
    }
    return false;
  }
}
