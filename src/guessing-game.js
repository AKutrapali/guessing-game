class GuessingGame {
    constructor() {
    
    }

    setRange(min, max) {
    this.min = min;
    this.max = max;
    }

    guess() {
    this.possibleValue = Math.round(this.min + (this.max - this.min) / 2);
    return this.possibleValue;
    }

    lower() {
    this.max = this.possibleValue;
    }

    greater() {
    this.min = this.possibleValue;
    }
}

module.exports = GuessingGame;
