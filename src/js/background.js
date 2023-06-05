import { Actor, GraphicsGroup, Vector } from "excalibur";
import { Resources } from "./resources.js";
// import { ScrollLayer } from "./scrollReset.js";

export class Background extends Actor {
  offset;

  onInitialize(engine) {
    const cityBG = Resources.BgImg.toSprite();
    this.offset = cityBG.width;

    const groupCITYBG = new GraphicsGroup({
      members: [
        {
          graphic: cityBG,
          pos: new Vector(0, 0),
        },
        {
          graphic: cityBG,
          pos: new Vector(this.offset, 0),
        },
      ],
    });
    this.graphics.anchor = new Vector(0, 0);
    this.graphics.add(groupCITYBG);
    this.pos = new Vector(0, 0);
    this.vel = new Vector(-50, 0);
    this.scale = new Vector(0.4, 0.4);
  }
  onPostUpdate(engine, delta) {
    if (this.pos.x < -this.offset * 0.4) {
      this.pos = new Vector(0, 0);
    }
  }
}
