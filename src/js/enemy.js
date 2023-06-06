import { Vector, CollisionType, Actor } from "excalibur";
import { Resources } from "./resources.js";

export class Enemy extends Actor {
  constructor() {
    super({
      width: 100, // hitbox
      height: 100,
      collisionType: CollisionType.Active,
    });
  }
  onInitialize(engine) {
    this.pos = new Vector(800, 600);
    // this.on("collisionstart", (event) => this.hitSomething(event));
  }
}
