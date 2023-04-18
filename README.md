# mol.ai
This is a simple library for Tone & Message Type detection.

## Usage
### Max
```typescript
import { Max } from './lib/index';

const max = new Max('Hello, how are you?');
const tone = max.getTone();
```
Max detects the tone of messages, and classifies to either Inconclusive or the following:
- chill
- cute
- flirty
- happy
- sad
- angry

### Julia
```typescript
import { Julia } from './lib/index';

const julia = new Julia('Hello, how are you?');
const type = julia.getMessageType();
```
Julia detects the type/theme for the supplied message, and returns either Inconclusive, or one of the following:
- question
- statement
- greeting
- goodbye
- gratitude
- apology
- agreement
- disagreement
- opinion
- suggestion