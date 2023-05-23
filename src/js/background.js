import { Actor, GraphicsGroup, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Background extends Actor {
  offset;

  onInitialize(engine) {
    //#region SKY
    const skyBG = Resources.BgImgSky.toSprite();
    this.offset = skyBG.width;

    const groupSKY = new GraphicsGroup({
      members: [
        {
          graphic: skyBG,
          pos: new Vector(0, 0),
        },
        {
          graphic: skyBG,
          pos: new Vector(this.offset, 0),
        },
      ],
    });
    this.graphics.anchor = new Vector(0, 0);
    this.graphics.add(groupSKY);
    this.pos = new Vector(0, 0);
    this.vel = new Vector(-10, 100);
    this.scale = new Vector(1, 1);

    //#endregion SKY

    //#region cityBG2
    const cityBG2 = Resources.BgImgBuild2.toSprite();
    this.offset = cityBG2.width;

    const groupCITYBG2 = new GraphicsGroup({
      members: [
        {
          graphic: cityBG2,
          pos: new Vector(0, 0),
        },
        {
          graphic: cityBG2,
          pos: new Vector(this.offset, 0),
        },
      ],
    });
    this.graphics.anchor = new Vector(0, 0);
    this.graphics.add(groupCITYBG2);
    this.pos = new Vector(0, 0);
    this.vel = new Vector(-10, 0);
    this.scale = new Vector(1, 1);

    //#endregion cityBG2

    //#region cityBG3
    const cityBG3 = Resources.BgImgBuild3.toSprite();
    this.offset = cityBG3.width;

    const groupCITYBG3 = new GraphicsGroup({
      members: [
        {
          graphic: cityBG3,
          pos: new Vector(0, 0),
        },
        {
          graphic: cityBG3,
          pos: new Vector(this.offset, 0),
        },
      ],
    });
    this.graphics.anchor = new Vector(0, 0);
    this.graphics.add(groupCITYBG3);
    this.pos = new Vector(0, 0);
    this.vel = new Vector(-10, 0);
    this.scale = new Vector(1, 1);

    //#endregion cityBG3

    //#region cityBG4
    const cityBG4 = Resources.BgImgBuild4.toSprite();
    this.offset = cityBG4.width;

    const groupCITYBG4 = new GraphicsGroup({
      members: [
        {
          graphic: cityBG4,
          pos: new Vector(0, 0),
        },
        {
          graphic: cityBG4,
          pos: new Vector(this.offset, 0),
        },
      ],
    });
    this.graphics.anchor = new Vector(0, 0);
    this.graphics.add(groupCITYBG4);
    this.pos = new Vector(0, 0);
    this.vel = new Vector(-10, 0);
    this.scale = new Vector(1, 1);

    //#endregion cityBG4

    //#region cityBG5
    const cityBG5 = Resources.BgImgBuild5.toSprite();
    this.offset = cityBG5.width;

    const groupCITYBG5 = new GraphicsGroup({
      members: [
        {
          graphic: cityBG5,
          pos: new Vector(0, 0),
        },
        {
          graphic: cityBG5,
          pos: new Vector(this.offset, 0),
        },
      ],
    });
    this.graphics.anchor = new Vector(0, 0);
    this.graphics.add(groupCITYBG5);
    this.pos = new Vector(0, 0);
    this.vel = new Vector(-10, 0);
    this.scale = new Vector(1, 1);

    //#endregion cityBG5

    //#region cityBG6
    const cityBG6 = Resources.BgImgBuild6.toSprite();
    this.offset = cityBG6.width;

    const groupCITYBG6 = new GraphicsGroup({
      members: [
        {
          graphic: cityBG6,
          pos: new Vector(0, 0),
        },
        {
          graphic: cityBG6,
          pos: new Vector(this.offset, 0),
        },
      ],
    });
    this.graphics.anchor = new Vector(0, 0);
    this.graphics.add(groupCITYBG6);
    this.pos = new Vector(0, 0);
    this.vel = new Vector(-10, 0);
    this.scale = new Vector(1, 1);

    //#endregion cityBG6
  }

  onPostUpdate(engine, delta) {
    if (this.pos.x < -this.offset) {
      this.pos = new Vector(0, 0);
    }
  }
}
