input.onButtonPressed(Button.A, function () {
    basic.showNumber(num)
    num += 1
})
input.onButtonPressed(Button.AB, function () {
    texto = "bye"
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(num)
    num += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(texto)
})
let texto = ""
let num = 0
num = 1
texto = "hola"
basic.forever(function () {
	
})
