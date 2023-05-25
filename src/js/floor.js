import { Actor, GraphicsGroup, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Floor extends Actor {
  offset;
  onInitialize(engine) {
    const floor = Resources.FloorIMG.toSprite();
    this.offset = floor.width;

    const groupfloor = new GraphicsGroup({
      members: [
        {
          graphic: floor,
          pos: new Vector(0, 0),
          vel: new Vector(-1, 0),
        },
        {
          graphic: floor,
          pos: new Vector(this.offset, 0),
          vel: new Vector(-1, 0),
        },
      ],
    });
    this.graphics.anchor = new Vector(0, 0);
    this.graphics.add(groupfloor);
    this.pos = new Vector(0, 0);
    this.vel = new Vector(-10, 0);
    this.scale = new Vector(0.4, 0.4);
  }
}
