import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Platform extends Actor {
  constructor() {
    super({
      width: 1600, // hitbox
      height: 60,
      collisionType: CollisionType.Fixed,
    });
    this.body.useGravity = true;
  }
  onInitialize(engine) {
    this.graphics.anchor = new Vector(0, 0);
    this.pos = new Vector(0, 675);
    this.scale = new Vector(1, 1);
    this.on("collisionstart", (event) => this.hitSomething(event));
  }
  hitSomething(event) {
    console.log("I hit something");
  }
}
