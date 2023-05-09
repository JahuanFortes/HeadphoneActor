import { Actor } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
export class Background extends Actor {
  offset;

  onInitialize(engine) {
    const bgImg = Resources.Background.toSprite();
    this.offset = bgImg.width;

    const group = new GraphicsGroup({
      members: [
        {
          graphic: bgImg,
          pos: new Vector(0, 0),
        },
        {
          graphic: bgImg,
          pos: new Vector(bgImg.width, 0),
        },
      ],
    });

    this.graphics.anchor = new Vector(0, 0);
    this.graphics.add(group);
    this.pos = new Vector(0, 0);
    this.vel = new Vector(-110, 0);
  }

  onPostUpdate(engine, delta) {
    if (this.pos.x < -this.offset) {
      this.pos = new Vector(0, 0);
    }
  }
}
