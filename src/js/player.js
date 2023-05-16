import { ImageSource, Sound, Resource, Loader, Actor } from "excalibur";
import { Actor, Vector, Input } from "excalibur";

export class Player extends Actor {
  onPreUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;
    if (
      engine.input.keyboard.isHeld(Input.Keys.W) ||
      engine.input.keyboard.isHeld(Input.Keys.Up)
    ) {
      yspeed = -300;
    }
    if (
      engine.input.keyboard.isHeld(Input.Keys.Space) ||
      engine.input.keyboard.isHeld(Input.Keys.Up)
    ) {
      yspeed = 300;
    }

    this.vel = new Vector(xspeed, yspeed);
  }
}
