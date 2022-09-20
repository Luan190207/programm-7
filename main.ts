basic.forever(function () {
    if (input.acceleration(Dimension.X) < -200) {
        basic.showIcon(IconNames.Sad)
    }
    if (input.acceleration(Dimension.X) >= 200) {
        basic.showIcon(IconNames.Happy)
    }
    if (input.acceleration(Dimension.X) >= -200 && input.acceleration(Dimension.X) < 200) {
        basic.showIcon(IconNames.Asleep)
    }
})
