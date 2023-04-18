export class Max {
  private readonly text: string;
  private readonly chillPhrases: Set<string>;
  private readonly cutePhrases: Set<string>;
  private readonly flirtyPhrases: Set<string>;
  private readonly happyPhrases: Set<string>;
  private readonly sadPhrases: Set<string>;
  private readonly angerPhrases: Set<string>;

  constructor(text: string) {
    this.text = text as string;

    // Define sets of phrases for each tone
    this.chillPhrases = new Set([
      "take it easy",
      "no worries",
      "calm down",
      "relax",
      "chill",
      // add more phrases as needed
    ]);
    this.cutePhrases = new Set([
      "adorable",
      "cute",
      "darling",
      "sweet",
      "lovely",
      // add more phrases as needed
    ]);
    this.flirtyPhrases = new Set([
      "you look stunning",
      "let's hang out",
      "you're cute",
      "you're hot",
      "want to grab a drink?",
      // add more phrases as needed
    ]);
    this.happyPhrases = new Set([
      "congratulations",
      "awesome",
      "fantastic",
      "wonderful",
      "amazing",
      // add more phrases as needed
    ]);
    this.sadPhrases = new Set([
      "I'm sorry",
      "that's too bad",
      "sad",
      "upset",
      "depressed",
      // add more phrases as needed
    ]);
    this.angerPhrases = new Set([
      "what the heck",
      "I'm so angry",
      "outrageous",
      "that's not fair",
      "unbelievable",
      // add more phrases as needed
    ]);
  }

  getTone(): string | null {
    // Convert the text to lowercase for case-insensitive matching
    const text = this.text.toLowerCase();

    // Check for each tone
    if (this.checkForTone(text, this.chillPhrases)) {
      return "chill";
    } else if (this.checkForTone(text, this.cutePhrases)) {
      return "cute";
    } else if (this.checkForTone(text, this.flirtyPhrases)) {
      return "flirty";
    } else if (this.checkForTone(text, this.happyPhrases)) {
      return "happy";
    } else if (this.checkForTone(text, this.sadPhrases)) {
      return "sad";
    } else if (this.checkForTone(text, this.angerPhrases)) {
      return "anger";
    } else {
      // If no tone is detected, return a message
      return "Inconclusive: Unable to detect tone.";
    }
  }

  // Helper function to check if a text contains any phrases in a given set
  // Helper function to check if a text contains any phrases in a given set
  private checkForTone(text: string, phrases: Set<string>): boolean {
    // Check if any of the phrases match the entire text
    for (const phrase of phrases) {
      if (text.includes(phrase)) {
        return true;
      }
    }

    // If none of the phrases match the entire text, split the text into individual words and check for matches
    const words = text.split(/\s+/);
    for (const phrase of phrases) {
      let numMatches = 0;
      for (const word of words) {
        if (phrase.includes(word)) {
          numMatches++;
        }
      }
      if (numMatches >= 2) {
        return true;
      }
    }
    return false;
  }
}
