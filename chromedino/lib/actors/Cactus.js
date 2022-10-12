import config from '../config.js'
import { randItem } from '../utils.js'
import Actor from './Actor.js'

const VARIANTS = ['cactus', 'cactusDouble', 'cactusDoubleB', 'cactusTriple']

export default class Cactus extends Actor {
  constructor(imageData) {
    super(imageData)
    this.sprite = randItem(VARIANTS)
  }

  nextFrame() {
    this.x -= config.settings.bgSpeed
  }
}
