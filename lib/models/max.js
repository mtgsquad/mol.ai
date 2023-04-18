"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Max = void 0;
class Max {
    constructor(text) {
        this.text = text;
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
    getTone() {
        // Convert the text to lowercase for case-insensitive matching
        const text = this.text.toLowerCase();
        // Check for each tone
        if (this.checkForTone(text, this.chillPhrases)) {
            return "chill";
        }
        else if (this.checkForTone(text, this.cutePhrases)) {
            return "cute";
        }
        else if (this.checkForTone(text, this.flirtyPhrases)) {
            return "flirty";
        }
        else if (this.checkForTone(text, this.happyPhrases)) {
            return "happy";
        }
        else if (this.checkForTone(text, this.sadPhrases)) {
            return "sad";
        }
        else if (this.checkForTone(text, this.angerPhrases)) {
            return "anger";
        }
        else {
            // If no tone is detected, return a message
            return "Inconclusive: Unable to detect tone.";
        }
    }
    // Helper function to check if a text contains any phrases in a given set
    // Helper function to check if a text contains any phrases in a given set
    checkForTone(text, phrases) {
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
exports.Max = Max;
