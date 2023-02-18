input.onPinPressed(TouchPin.P0, function () {
    input.setAccelerometerRange(AcceleratorRange.FourG)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Do you want to see my new racing stripe?")
    basic.clearScreen()
    basic.pause(5000)
    basic.showString("I will show it.")
    basic.clearScreen()
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.pause(5000)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1000
    )
})
loops.everyInterval(60000, function () {
    music.playMelody("F G F G A B C5 D ", 500)
})
basic.forever(function () {
	
})
