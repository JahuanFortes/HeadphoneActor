import { ImageSource, Sound, Resource, Loader, Actor } from "excalibur";
import { Resources } from "./resources.js";
import { Vector, Input } from "excalibur";

export class Player extends Actor {
  constructor() {
    super({ width: 150, height: 200 });
  }

  onPreUpdate(engine) {
    const player = Resources.Player.toSprite();
    let yspeed = 0;

    if (engine.input.keyboard.isHeld(Input.Keys.W)) {
      yspeed = 300;
    }
    if (
      engine.input.keyboard.isHeld(Input.Keys.Space) ||
      engine.input.keyboard.isHeld(Input.Keys.Up)
    ) {
      yspeed = 300;
    }

    this.graphics.add(player);
    this.vel = new Vector(yspeed);
    this.scale = new Vector(30, 30);
  }
}
