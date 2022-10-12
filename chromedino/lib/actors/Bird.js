import config from '../config.js'
import Actor from './Actor.js'

export default class Bird extends Actor {
  static maxBirdHeight =
    Math.max(config.sprites.birdUp.h, config.sprites.birdDown.h) / 2

  // pixels that are added/removed to `y` when switching between wings up and wings down
  static wingSpriteYShift = 6

  constructor(imageData) {
    super(imageData)
    this.wingFrames = 0
    this.wingDirection = 'Up'
    this.sprite = `bird${this.wingDirection}`
  }

  nextFrame() {
    this.x -= config.settings.birdSpeed
    this.determineSprite()
  }

  determineSprite() {
    const oldHeight = this.height

    if (this.wingFrames >= config.settings.birdWingsRate) {
      this.wingDirection = this.wingDirection === 'Up' ? 'Down' : 'Up'
      this.wingFrames = 0
    }

    this.sprite = `bird${this.wingDirection}`
    this.wingFrames++

    // if we're switching sprites, y needs to be
    // updated for the height difference
    if (this.height !== oldHeight) {
      let adjustment = Bird.wingSpriteYShift
      if (this.wingDirection === 'Up') {
        adjustment *= -1
      }

      this.y += adjustment
    }
  }
}
