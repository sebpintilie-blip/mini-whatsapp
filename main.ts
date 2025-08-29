enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    letter += -1
    if (letter < 0) {
        letter = 27
    }
    ShowLetter()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("letter", letter)
})
input.onButtonPressed(Button.B, function () {
    letter += 1
    if (letter > 27) {
        letter = 0
    }
    ShowLetter()
})
radio.onReceivedValue(function (name, value) {
    if (name == "letter") {
        letter = value
        ShowLetter()
    }
})
function ShowLetter () {
    if (letter == 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    } else if (letter == 1) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
    } else if (letter == 2) {
        basic.showLeds(`
            . . # # .
            . # . . .
            . # . . .
            . # . . .
            . . # # .
            `)
    } else if (letter == 3) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    } else if (letter == 4) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # # # .
            `)
    } else if (letter == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
    } else if (letter == 6) {
        basic.showLeds(`
            . . # # .
            . # . . .
            . # . . .
            . # . # .
            . . # # .
            `)
    } else if (letter == 7) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    } else if (letter == 8) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (letter == 9) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . # . # .
            . . # . .
            `)
    } else if (letter == 10) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
    } else if (letter == 11) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
    } else if (letter == 12) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    } else if (letter == 13) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else if (letter == 14) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # . # .
            . # . # .
            . . # . .
            `)
    } else if (letter == 15) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . . .
            . # . . .
            `)
    } else if (letter == 16) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # . # .
            . # . # .
            . . # # #
            `)
    } else if (letter == 17) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
    } else if (letter == 18) {
        basic.showLeds(`
            . . # # .
            . # . . .
            . . # . .
            . . . # .
            . # # . .
            `)
    } else if (letter == 19) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (letter == 20) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    } else if (letter == 21) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . . # . .
            `)
    } else if (letter == 22) {
        basic.showLeds(`
            # . . . #
            # . # . #
            # . # . #
            . # . # .
            . # . # .
            `)
    } else if (letter == 23) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            . # . # .
            . # . # .
            `)
    } else if (letter == 24) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (letter == 25) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    } else if (letter == 26) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # # # # #
            `)
    } else if (letter == 27) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
let letter = 0
radio.setGroup(1)
radio.setTransmitPower(7)
ShowLetter()
