namespace SpriteKind {
    export const Ground = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 94) {
        mySprite.vy = -160
    }
})
function SetupGround () {
    floor1 = sprites.create(img`
        .................................................................................................................................ffffffff...............................
        ........................................................................ffff............................................ffffffffff.......ffff...........................
        ..................ff................................................ffff...ffffffffffffffffffffffffffffffff.......ffffff.....................fffffffffffff..............
        ............ffffff.ff......fffffffffffffffff...............fffffffff......................................ff..fffff.......................................ff.......f....
        fffffffffffff.......fff..fff................f.............f.................................................ff.......................fffff..................ffffffffffff
        .......................ff....................ff..........f......................................ff.......................................fff............................
        ...............................................ff......ff.........................................fffff............fffffff..................f...........................
        ............................fff..................ffffff..........ffff...............................................................................f...................
        .........................................fffff.......................................................................................................fff................
        ..................f...........................f.........................................................................................................fff.............
        ......fff.........ff.......................................................................................................................................f............
        ...................f....................................................................................................................................................
        ...........................................................................fff.........................................................f.........................ffff...
        ...........................................................................................................................................f............................
        ..................................ffff...................ff.................................................................................f...........................
        .....................................................ffff...............................................................................................................
        ......ffff..............................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        `, SpriteKind.Ground)
    floor2 = sprites.create(img`
        ........................................................................................................................................................................
        ...........................................................................................................f...................fffffff..................................
        ..f.........................ffffff............................ffffff...............fffffffffffffff........ffff................ff......ffff...................ffff.......
        .f.f........ffffff......fff.......fff......fffffffffffffffffff.....ff.........ffffff..............ff.....f....fffffffff....fff...........fffffffffffffffffffff...f......
        f..ffffffffff.....ffffff.............ffffff.........................ff...fffff......................fffff.............fffff.......................................ffffff
        .....................................................................ffff...............................................................................................
        ...............................................................f.........................................f..............................................................
        ................................................................f.........................................fffff................................................f........
        .....ff.........ff...............................................fff...........ffff..............................................fffffff...................ffff.........
        .......f..........fff................................f........................f.........................................................................................
        ......................................................ff................................................................................................................
        ........................................................f...............................................................................................................
        ....................................fffff................f......................................fffffff.................................................................
        .........ff.............................................................................................................................................................
        ............f...............................................f...........................................................................................................
        ................ffff....................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        ........................................................................................................................................................................
        `, SpriteKind.Ground)
    floor1.setPosition(scene.screenWidth() / 2, 120)
    floor2.setPosition(floor1.x + scene.screenWidth(), 120)
    floor1.vx = -100
    floor2.vx = -100
    floor1.x = 2
    floor2.x = 2
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let floor2: Sprite = null
let floor1: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(1)
SetupGround()
mySprite = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
info.setScore(0)
game.onUpdate(function () {
    info.changeScoreBy(1)
    if (mySprite.y < 94) {
        mySprite.ay = 400
    } else {
        mySprite.y = 94
        mySprite.x = 15
    }
})
game.onUpdateInterval(1000, function () {
    floor1.vx += -1
    floor2.vx += -1
})
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(40)) {
        projectile = sprites.createProjectileFromSide(img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ...........feeeeffeeeef.
            ..........fe2222eefffff.
            ..........f2effff222efff
            ..........fffeeeffffffff
            ..........fee44fbe44efef
            ...........feddfb4d4eef.
            ..........c.eeddd4eeef..
            ....ccccccceddee2222f...
            .....dddddcedd44e444f...
            ......ccccc.eeeefffff...
            ..........c...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, floor1.vx, 0)
        projectile.x = 165
        projectile.y = 90
    }
})
forever(function () {
    pause(100)
    mySprite.setImage(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    pause(100)
    mySprite.setImage(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
})
forever(function () {
    if (floor1.x < -1 * (scene.screenWidth() / 2)) {
        floor1.x = floor2.x + scene.screenWidth()
    }
})
forever(function () {
    if (floor2.x < -1 * (scene.screenWidth() / 2)) {
        floor2.x = floor1.x + scene.screenWidth()
    }
})
