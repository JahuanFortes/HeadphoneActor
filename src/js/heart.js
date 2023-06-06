import { ImageSource, Loader, Actor, CollisionType } from "excalibur";
import { Resources } from "./resources.js";
import { Vector, Input } from "excalibur";

export class Heart extends Actor {
  constructor() {
    super({
      collisionType: CollisionType.Fixed,
    });
    this.body.useGravity = true;
  }
  onInitialize(engine) {
    this.graphics.use(Resources.Heart.toSprite());
  }
}
