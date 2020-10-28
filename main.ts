let projectile: Sprite = null
let Snake = sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 6 7 7 7 7 7 6 c . . . 
    . . . c 7 c 6 6 6 6 c 7 6 c . . 
    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 8 1 f f 1 6 7 7 7 f . . 
    . . f 6 f 1 f f 1 f 7 7 7 f . . 
    . . . f f 2 2 2 2 f 7 7 6 f . . 
    . . c c f 2 2 2 2 7 7 6 f c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.Enemy)
Snake.setPosition(80, 20)
game.onUpdateInterval(200, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . 
        . 7 . 
        . . . 
        `, Snake, 0, -50)
    projectile = sprites.createProjectileFromSprite(img`
        . . . 
        . 7 . 
        . . . 
        `, Snake, 30, -40)
    projectile = sprites.createProjectileFromSprite(img`
        . . . 
        . 7 . 
        . . . 
        `, Snake, 45, -20)
    projectile = sprites.createProjectileFromSprite(img`
        . . . 
        . 7 . 
        . . . 
        `, Snake, 50, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . 
        . 7 . 
        . . . 
        `, Snake, 45, 20)
    projectile = sprites.createProjectileFromSprite(img`
        . . . 
        . 7 . 
        . . . 
        `, Snake, 30, 40)
    projectile = sprites.createProjectileFromSprite(img`
        . . . 
        . 7 . 
        . . . 
        `, Snake, 0, 50)
    projectile = sprites.createProjectileFromSprite(img`
        . . . 
        . 7 . 
        . . . 
        `, Snake, -30, 40)
    projectile = sprites.createProjectileFromSprite(img`
        . . . 
        . 7 . 
        . . . 
        `, Snake, -45, 20)
    projectile = sprites.createProjectileFromSprite(img`
        . . . 
        . 7 . 
        . . . 
        `, Snake, -50, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . 
        . 7 . 
        . . . 
        `, Snake, -45, -20)
    projectile = sprites.createProjectileFromSprite(img`
        . . . 
        . 7 . 
        . . . 
        `, Snake, -30, -40)
})
