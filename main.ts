// Changes the value of "Guess" by 1
input.onButtonPressed(Button.A, function () {
    Guess += 1
    basic.showNumber(Guess)
})
input.onButtonPressed(Button.AB, function () {
    if (Guess > X) {
        // Tells you that your guess is to high
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            basic.clearScreen()
            basic.pause(500)
        }
    } else if (Guess < X) {
        // Tells you that your guess is to low
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            basic.clearScreen()
            basic.pause(500)
        }
    } else {
        // Tells you that you guessed correctly. Then it ups the difficulty and counts your score
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            basic.clearScreen()
            basic.pause(500)
        }
        Guess = 0
        Score += 1
        Difficulty += 10
        X = randint(0, Difficulty)
        basic.showString("Next Level")
    }
})
// Changes the value of "Guess" by -1
input.onButtonPressed(Button.B, function () {
    Guess += -1
    basic.showNumber(Guess)
})
// Resets program and shows score
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (Score))
    Score = 0
    Difficulty = 20
    Guess = 0
    X = randint(0, Difficulty)
})
// Sets program
let X = 0
let Guess = 0
let Difficulty = 0
let Score = 0
basic.showString("Guess the number")
Score = 0
Difficulty = 20
Guess = 0
X = randint(0, Difficulty)
basic.forever(function () {
    if (Guess > Difficulty || Guess < 0) {
        Score = 0
    }
})
