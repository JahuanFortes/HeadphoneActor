import { Vector, CollisionType } from "excalibur";
import { Resources } from "./resources.js";
import { Enemy } from "./enemy.js";
import { Player } from "./player.js";

export class Obstacle extends Enemy {
  game;
  constructor() {
    super({
      collisionType: CollisionType.Active,
    });
  }
  onInitialize(engine) {
    this.game = engine;

    this.pos = new Vector(800, 600);
    this.vel = new Vector(-400, 0);
    this.on("collisionstart", (event) => this.onhit(event));
    this.on("exitviewport", () => this.movedOffScreen());
  }
  onhit(event) {
    if (event.other instanceof Player) {
      event.other.kill();
      this.game.goToScene("gameover");
    }
  }
  movedOffScreen() {
    this.pos = new Vector(800, 600);
  }
}
