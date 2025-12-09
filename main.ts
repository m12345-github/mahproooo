enum SpriteKind {
    Player,
    Mermi,
    Dusman
}
sprites.onOverlap(SpriteKind.Mermi, SpriteKind.Dusman, function (proj, enem) {
    enem.destroy(effects.disintegrate, 100)
    proj.destroy()
    info.changeScoreBy(1)
})
