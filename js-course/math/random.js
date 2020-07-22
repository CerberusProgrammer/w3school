function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10