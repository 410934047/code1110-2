basic.forever(function () {
    for (let X = 0; X <= 4; X++) {
        led.plot(2, X + 2)
        led.plot(2, 2 - X)
        led.plot(X + 2, 2)
        led.plot(2 - X, 2)
        basic.pause(200)
    }
    basic.clearScreen()
})
