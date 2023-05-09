import { Resources, ResourceLoader } from "./resources.js";
export class Background {
  bgImg;
  constructor() {
    this.bgImg = bgImg;
  }
  bgImg() {
    bgImg.graphics.use(Resources.bgImg.toSprite());
    bgImg.pos = new Vector(400, 200);
    bgImg.scale = new Vector(0.4, 0.4);

    //background moving
    bgImg.vel.x = -5;
  }
}
