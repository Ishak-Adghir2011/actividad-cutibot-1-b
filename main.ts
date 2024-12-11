let Ishak = false
basic.forever(function () {
    Ishak = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 15
    cuteBot.motors(30, 30)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ff00)
    while (Ishak) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        cuteBot.stopcar()
        basic.pause(500)
        cuteBot.moveTime(cuteBot.Direction.left, 60, 0.5)
    }
})
