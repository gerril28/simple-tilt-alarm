input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.No)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 3808, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
basic.forever(function () {
	
})
