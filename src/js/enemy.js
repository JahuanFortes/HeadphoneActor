import { Vector, CollisionType, Actor, obsolete } from "excalibur";
import { Resources } from "./resources.js";

export class Enemy extends Actor {
  constructor() {
    super({
      width: 100, // hitbox
      height: 100,
      collisionType: CollisionType.Fixed,
    });
  }
  onInitialize(engine) {
    this.pos = new Vector(800, 600);
    this.game = engine;
    this.graphics.use(Resources.Rock.toSprite());
    this.rand = Math.random() * 700 + 100;
    this.pos = new Vector(this.rand + this.offset, 600);
    this.vel = new Vector(-400, -200);
    this.on("collisionstart", (event) => this.onhit(event));
    this.on("enterviewport", () => {
      this.on("exitviewport", () => this.movedOffScreen());
    });
    this.game.addChild(this.obstacle);
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
