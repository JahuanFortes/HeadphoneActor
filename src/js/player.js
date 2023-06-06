import { ImageSource, Loader, Actor, CollisionType } from "excalibur";
import { Resources } from "./resources.js";
import { Vector, Input } from "excalibur";
import { Platform } from "./platform.js";

export class Player extends Actor {
  grounded = true;

  constructor() {
    super({
      width: Resources.Player.width,
      height: Resources.Player.height,
      collisionType: CollisionType.Active,
    });
    this.body.useGravity = true;
  }
  onInitialize(engine) {
    this.graphics.use(Resources.Player.toSprite());
    this.pos = new Vector(80, 600);
    this.on("collisionstart", (event) => this.hitSomething(event));
    this.on("collisionend", (event) => this.leaveSomething(event));
  }

  hitSomething(event) {
    if (event.other instanceof Platform) {
      this.grounded = true;
    }
  }
  leaveSomething(event) {
    if (event.other instanceof Platform) {
      this.grounded = false;
    }
  }

  onPreUpdate(engine) {
    let yspeed = 0;
    if (this.grounded) {
      if (
        engine.input.keyboard.wasPressed(Input.Keys.W) ||
        engine.input.keyboard.wasPressed(Input.Keys.Space) ||
        engine.input.keyboard.wasPressed(Input.Keys.Up)
      ) {
        console.log(this.vel.y);
        yspeed = -500;
      }
    }
    this.vel = new Vector(this.vel.x, this.vel.y + yspeed);
  }
}
