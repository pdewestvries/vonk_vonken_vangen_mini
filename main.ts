input.onPinPressed(TouchPin.P0, function () {
    if (score_speler1 > 0) {
        if (kleur_speler1 == RandomKleur) {
            score_speler1 += 1
            totaal_speler1.showBarGraph(score_speler1, 15)
            if (score_speler1 == 15) {
                gewonnen()
            }
        } else {
            score_speler1 += -1
            totaal_speler1.showBarGraph(score_speler1, 15)
            if (score_speler1 == 0) {
                verloren()
            }
        }
    }
})
function verloren () {
    basic.showIcon(IconNames.No)
}
input.onButtonPressed(Button.A, function () {
    score_speler1 = start_score
    score_speler2 = start_score
    score_speler3 = start_score
    totaal_speler1.showColor(neopixel.colors(NeoPixelColors.Black))
    totaal_speler2.showColor(neopixel.colors(NeoPixelColors.Black))
    totaal_speler3.showColor(neopixel.colors(NeoPixelColors.Black))
    STRIP.show()
    basic.clearScreen()
})
function gewonnen () {
    basic.showIcon(IconNames.Yes)
}
input.onPinPressed(TouchPin.P2, function () {
    if (score_speler3 > 0) {
        if (kleur_speler3 == RandomKleur) {
            score_speler3 += 1
            totaal_speler3.showBarGraph(score_speler3, 15)
            if (score_speler3 == 15) {
                gewonnen()
            }
        } else {
            score_speler3 += -1
            totaal_speler3.showBarGraph(score_speler3, 15)
            if (score_speler3 == 0) {
                verloren()
            }
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (score_speler2 > 0) {
        if (kleur_speler2 == RandomKleur) {
            score_speler2 += 1
            totaal_speler2.showBarGraph(score_speler2, 15)
            if (score_speler2 == 15) {
                gewonnen()
            }
        } else {
            score_speler2 += -1
            totaal_speler2.showBarGraph(score_speler2, 15)
            if (score_speler2 == 0) {
                verloren()
            }
        }
    }
})
/**
 * Één tot drie spelers.
 * 
 * Iedere speler krijgt een kleur toegewezen.
 * 
 * Willekeurig "valt" een kleur naar beneden en 
 * 
 * als de speler "zijn" kleur ziet tikt hij op zijn knop.
 * 
 * Kloppen de kleuren dan krijgt hij een punt.
 * 
 * Klopt het niet dan gaat er een punt af.
 * 
 * Een speler start met 5 punten en heeft gewonnen als hij 15 punten heeft.
 */
let kleur_spelers: number[] = []
let kleur_waarde = 0
let kleur_speler2 = 0
let kleur_speler3 = 0
let RandomKleur = 0
let kleur_speler1 = 0
let score_speler3 = 0
let score_speler2 = 0
let score_speler1 = 0
let totaal_speler3: neopixel.Strip = null
let totaal_speler2: neopixel.Strip = null
let totaal_speler1: neopixel.Strip = null
let STRIP: neopixel.Strip = null
let start_score = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
let LENGTE = 64
start_score = 3
STRIP = neopixel.create(DigitalPin.P8, LENGTE, NeoPixelMode.RGB)
let Speler1 = STRIP.range(0, 8)
let Speler2 = STRIP.range(16, 8)
let Speler3 = STRIP.range(32, 8)
let vonken = STRIP.range(48, 16)
totaal_speler1 = STRIP.range(8, 8)
totaal_speler2 = STRIP.range(24, 8)
totaal_speler3 = STRIP.range(40, 8)
let begin = vonken.range(0, 1)
score_speler1 = start_score
score_speler2 = start_score
score_speler3 = start_score
basic.pause(200)
STRIP.clear()
basic.pause(200)
STRIP.show()
basic.forever(function () {
    begin.showColor(neopixel.colors(NeoPixelColors.Black))
    vonken.shift(1)
    basic.pause(35)
})
/**
 * Kies willeurig een kleur en zet deze boven in de rij
 */
loops.everyInterval(800, function () {
    kleur_waarde = randint(0, 2)
    if (kleur_waarde == 0) {
        RandomKleur = neopixel.colors(NeoPixelColors.Red)
    } else {
        if (kleur_waarde == 1) {
            RandomKleur = neopixel.colors(NeoPixelColors.Green)
        } else {
            if (kleur_waarde == 2) {
                RandomKleur = neopixel.colors(NeoPixelColors.Blue)
            } else {
                RandomKleur = neopixel.colors(NeoPixelColors.White)
            }
        }
    }
    vonken.setPixelColor(1, RandomKleur)
})
loops.everyInterval(5000, function () {
    kleur_spelers = [
    [neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Blue)],
    [neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Blue), neopixel.colors(NeoPixelColors.Green)],
    [neopixel.colors(NeoPixelColors.Blue), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green)],
    [neopixel.colors(NeoPixelColors.Blue), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Red)],
    [neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Blue), neopixel.colors(NeoPixelColors.Red)],
    [neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Blue)]
    ]._pickRandom()
    kleur_speler1 = kleur_spelers[0]
    kleur_speler2 = kleur_spelers[1]
    kleur_speler3 = kleur_spelers[2]
    Speler1.showColor(kleur_speler1)
    Speler2.showColor(kleur_speler2)
    Speler3.showColor(kleur_speler3)
})
