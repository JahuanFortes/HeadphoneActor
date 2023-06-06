import { Vector, CollisionType, Random } from "excalibur";
import { Resources } from "./resources.js";
import { Enemy } from "./enemy.js";
import { Player } from "./player.js";
import { GameOver } from "./scenes/gameover.js";

export class Obstacle extends Enemy {
  game;
  offset;
  constructor(offset) {
    super({
      collisionType: CollisionType.Active,
    });
    this.offset = offset;
  }
  onInitialize(engine) {
    this.game = engine;
    this.graphics.use(Resources.Rock.toSprite());
    this.pos = new Vector(800 + this.offset, 600);
    // this.yes = Math.random() * 700 + 100;
    // this.pos = new Vector(this.yes + this.offset, 600);
    this.vel = new Vector(-400, 0);
    this.on("collisionstart", (event) => this.onhit(event));
    this.on("enterviewport", () => {
      this.on("exitviewport", () => this.movedOffScreen());
    });
  }
  onhit(event) {
    if (event.other instanceof Player) {
      event.other.kill();
      this.game.addScene("GameOver", new GameOver());
      this.game.goToScene("GameOver");
    }
  }
  movedOffScreen() {
    this.pos = new Vector(800, 600);
  }
}
