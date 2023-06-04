import { Actor, GraphicsGroup, Vector, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

export class Street extends Actor {
  offset;
  // constructor() {
  //   super({
  //     width: Resources.FloorIMG.width * 2,
  //     height: Resources.FloorIMG.height,
  //     collisionType: CollisionType.Active,
  //   });
  //   this.body.useGravity = true;
  // }
  onInitialize(engine) {
    const streetIMG = Resources.StreetIMG.toSprite();
    this.offset = streetIMG.width;

    const groupstreetIMG = new GraphicsGroup({
      members: [
        {
          graphic: streetIMG,
          pos: new Vector(0, 0),
        },
        {
          graphic: streetIMG,
          pos: new Vector(this.offset, 0),
        },
      ],
    });
    //this.graphics.anchor = new Vector(0, 0);
    this.graphics.add(groupstreetIMG);
    this.pos = new Vector(0, 450);
    // this.vel = new Vector(-10, 0);
    this.scale = new Vector(0.9, 0.9);
  }
  onPostUpdate(engine, delta) {
    if (this.pos.x < -this.offset * 1) {
      this.pos = new Vector(0, 0);
    }
  }
}
