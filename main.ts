function checkIfWon () {
    if (sprites2.length == 1) {
        if (sprites2[0] == mp.getPlayerSprite(mp.PlayerNumber.One)) {
            game.splash("Player 1 Wins!")
        } else if (sprites2[0] == mp.getPlayerSprite(mp.PlayerNumber.Two)) {
            game.splash("Player 2 Wins!")
        } else if (sprites2[0] == mp.getPlayerSprite(mp.PlayerNumber.Three)) {
            game.splash("Player 3 Wins!")
        } else {
            game.splash("Player 4 Wins!")
        }
        game.reset()
    }
}
mp.onLifeZero(function (player2) {
    mp.getPlayerSprite(player2).destroy(effects.fire, 500)
    sprites2.removeAt(sprites2.indexOf(mp.getPlayerSprite(player2)))
    if (it == mp.getPlayerSprite(player2)) {
        it.sayText("", 2000, false)
        it = sprites2._pickRandom()
        youreIt()
    }
    checkIfWon()
})
function youreIt () {
    it.sayText("It", 2000, false)
    it.setPosition(randint(5, 155), randint(15, 115))
    it.setKind(SpriteKind.Enemy)
    info.startCountdown(10)
}
info.onCountdownEnd(function () {
    it.setKind(SpriteKind.Player)
    reduceLife(it)
    it = sprites2._pickRandom()
    youreIt()
})
function reduceLife (sprite: Sprite) {
    if (sprite == mp.getPlayerSprite(mp.PlayerNumber.One)) {
        mp.changePlayerStateBy(mp.PlayerNumber.One, MultiplayerState.Lives, -1)
    } else if (sprite == mp.getPlayerSprite(mp.PlayerNumber.Two)) {
        mp.changePlayerStateBy(mp.PlayerNumber.Two, MultiplayerState.Lives, -1)
    } else if (sprite == mp.getPlayerSprite(mp.PlayerNumber.Three)) {
        mp.changePlayerStateBy(mp.PlayerNumber.Three, MultiplayerState.Lives, -1)
    } else {
        mp.changePlayerStateBy(mp.PlayerNumber.Four, MultiplayerState.Lives, -1)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.stopCountdown()
    it.sayText("", 2000, false)
    reduceLife(sprite)
    it = sprite
    otherSprite.setKind(SpriteKind.Player)
    youreIt()
})
let it: Sprite = null
let sprites2: Sprite[] = []
game.showLongText("Once all your friends have joined, hit A to continue.", DialogLayout.Center)
game.showLongText("breaking news, Jamie pooped his pants", DialogLayout.Center)
sprites2 = [
sprites.create(img`
    ...........fffffff...ccfff..........
    ..........fbbbbbbbffcbbbbf..........
    ..........fbb111bbbbbffbf...........
    ..........fb11111ffbbbbff...........
    ..........f1cccc1ffbbbbbcff.........
    ..........ffc1c1c1bbcbcbcccf........
    ...........fcc3331bbbcbcbcccf..ccccc
    ............c333c1bbbcbcbccccfcddbbc
    ............c333c1bbbbbbbcccccddbcc.
    ............c333c11bbbbbccccccbbcc..
    ...........cc331c11bbbbccccccfbccf..
    ...........cc13c11cbbbcccccbbcfccf..
    ...........c111111cbbbfdddddc.fbbcf.
    ............cc1111fbdbbfdddc...fbbf.
    ..............cccfffbdbbfcc.....fbbf
    ....................fffff........fff
    `, SpriteKind.Player),
sprites.create(img`
    ..............eeeeeee...........
    ............ee455662e2e.........
    ..........ee45556723e2688.......
    .........e46776677232e777668....
    ........e46745554772227776778...
    .......4448744444777766777678...
    ......4522e7777776777766676668..
    .....4523227766722e666eeeee888..
    ....455232e76672322e4555dddd48..
    ...44567777554623e455ddddddddd4.
    ...e66774554477e455dddd55554dd44
    ..e46777444677e55dd55555d55dddd4
    ..e5668677666e5dd555555555555dde
    .e45544e8776e5d555554555555555de
    .e554eeee66e5d5555d55555dddd54de
    .e55ee44fee5d5d555555d5d5dddddde
    e454eeeefe45d55555555555dd4ddde.
    e5e4eefffe5d55555555d5555dddde..
    e5ee4eeff45d555555555555dddde...
    e5eeeeffe5d55d555d5555d5ddde....
    e5ffefeee5d55545555555ddd4e.....
    e5ffffffe545555555d5d4ddee......
    e54efeff45d55d55555dddde........
    e5eeeffe5dd5555545dddee.........
    e4eeefff5d5555d55ddde...........
    e4efefff5d5d55555d4e............
    .e4efffe5d555555dee.............
    .e54eeee5d545dd4e...............
    ..e554ee5dddddee................
    ...ee5544dddee..................
    .....eeeeeee....................
    ................................
    `, SpriteKind.Player),
sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player),
sprites.create(img`
    ...cccccccccccccccccc...
    ..cd5555555555555555dc..
    .c55555555555555555555c.
    .c55333333333333333355c.
    .c53333333333333333335c.
    .c53333333333333333335c.
    c333cccccccccccccccc333c
    c55c3555555555555553c55c
    c55c5555555555555555c55c
    c55c5555555555555555c55c
    c55c5555555555555555c55c
    c35c5555555555555555c53c
    cc33333333333333333333cc
    cc33333333333333333333cc
    cccccccccccccccccccccccc
    ..cbbc............cbbc..
    `, SpriteKind.Player)
]
for (let value of mp.allPlayers()) {
    mp.setPlayerSprite(value, sprites2[mp.playerToIndex(value)])
    mp.moveWithButtons(value, mp.getPlayerSprite(value))
    mp.getPlayerSprite(value).setStayInScreen(true)
    mp.setPlayerState(value, MultiplayerState.Lives, 3)
}
mp.getPlayerSprite(mp.PlayerNumber.One).setPosition(5, 15)
mp.getPlayerSprite(mp.PlayerNumber.Two).setPosition(155, 15)
mp.getPlayerSprite(mp.PlayerNumber.Three).setPosition(5, 105)
mp.getPlayerSprite(mp.PlayerNumber.Four).setPosition(155, 105)
it = sprites2._pickRandom()
youreIt()
