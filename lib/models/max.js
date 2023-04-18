"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Max = void 0;
class Max {
    constructor(text) {
        this.text = text.toLowerCase();
        // Define sets of phrases for each tone
        this.chillPhrases = new Set([
            "What's up?",
            "How's it going?",
            "Just hanging out today.",
            "Netflix and chill?",
            "Not much, just relaxing.",
            "Just taking it easy.",
            "Just enjoying the day.",
            "Just taking some time for myself.",
            "Just chilling at home.",
            "Just unwinding after a long day.",
            "Just enjoying the peace and quiet.",
            "Nothing much, just thinking.",
            "Just reading a book.",
            "Just listening to music.",
            "Just watching the world go by.",
            "Just enjoying the sunshine.",
            "Just enjoying the rain.",
            "Just taking a break.",
            "Just catching my breath.",
            "Just going with the flow.",
        ]);
        this.cutePhrases = new Set([
            "You are adorable!",
            "You have a cute smile.",
            "I love your laugh.",
            "You look cute in that outfit.",
            "You are the cutest person I know.",
            "Your eyes are so beautiful.",
            "You make my heart skip a beat.",
            "You have a cute nose.",
            "You are the sweetest person I know.",
            "I love your sense of humor.",
            "You are the sunshine in my life.",
            "You have a cute giggle.",
            "I love the way you talk.",
            "You are a precious gem.",
            "You have a cute personality.",
            "You light up my world.",
            "You have a cute way of expressing yourself.",
            "You are a ray of sunshine.",
            "You have a cute aura.",
            "You are the cutest thing ever!",
        ]);
        this.flirtyPhrases = new Set([
            "You look amazing tonight.",
            "I can't stop thinking about you.",
            "You have the most beautiful eyes.",
            "I love the way you move.",
            "You have a great sense of style.",
            "You are so much fun to be around.",
            "I love your energy.",
            "You have an amazing smile.",
            "You are so beautiful/handsome.",
            "I am so attracted to you.",
            "You have a great laugh.",
            "I love spending time with you.",
            "You make my heart race.",
            "You have an incredible aura.",
            "I can't resist you.",
            "You have a magnetic personality.",
            "I feel so lucky to know you.",
            "You have a way of making me feel special.",
            "You are absolutely stunning.",
            "I can't get enough of you.",
            "hey sexy",
            "hey shawty"
        ]);
        this.happyPhrases = new Set([
            "I'm so happy today!",
            "This is the best day ever!",
            "I feel amazing!",
            "I can't stop smiling!",
            "Life is good!",
            "I'm on top of the world!",
            "I'm feeling so blessed!",
            "I'm grateful for everything!",
            "I'm so excited!",
            "I'm loving life right now!",
            "I feel like a million bucks!",
            "I'm so glad to be alive!",
            "Everything is falling into place!",
            "I'm surrounded by love and positivity!",
            "I'm beaming with happiness!",
            "I'm in a great mood today!",
            "I'm feeling the good vibes!",
            "I'm so content and happy!",
            "I'm feeling so lucky!",
            "I'm over the moon!",
        ]);
        this.sadPhrases = new Set([
            "I'm feeling really down today",
            "I just can't seem to shake off this sadness",
            "I don't know what to do, I feel so lost",
            "Everything feels so hopeless right now",
            "I wish things were different",
            "I feel like I'm just going through the motions",
            "I'm really struggling to cope with everything",
            "I just want to curl up in bed and stay there",
            "I feel like I'm all alone",
            "I just want someone to talk to",
        ]);
        this.angerPhrases = new Set([
            "I am so angry right now",
            "This is so frustrating, I can't believe it",
            "Why does this always happen to me?",
            "I just want to scream",
            "I can't stand this anymore",
            "I feel like I'm going to explode",
            "I'm sick and tired of dealing with this",
            "I can't believe you would do something like this",
            "This is just unacceptable",
            "I'm really disappointed in how things turned out",
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
