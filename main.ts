basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P1))
        basic.pause(1000)
    }
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P1) - 0,
    1023
    )
})
