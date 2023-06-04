import { Actor, CollisionType, GraphicsGroup, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Ground extends Actor {
  offset;
  constructor() {
    super({
      width: 8000, // hitbox
      height: 60,
      collisionType: CollisionType.Fixed,
    });
    this.body.useGravity = true;
  }
  onInitialize(engine) {
    const groundtest = Resources.GroundTest.toSprite();
    this.offset = groundtest.width;
    this.graphics.anchor = new Vector(0, 0);
    this.pos = new Vector(0, 600);
    this.scale = new Vector(1, 1);
    this.on("collisionstart", (event) => this.hitSomething(event));
  }
  hitSomething(event) {
    console.log("I hit something");
  }
  onPostUpdate(engine, delta) {
    if (this.pos.x < -this.offset * 0.5) {
      this.pos = new Vector(0, 0);
    }
  }
}
