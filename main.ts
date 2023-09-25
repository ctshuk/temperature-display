input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("C")
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() * 1.8 + 32)
    basic.showString("F")
    basic.pause(5000)
})
