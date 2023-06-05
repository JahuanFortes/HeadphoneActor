import {
  Actor,
  GraphicsGroup,
  Vector,
  CollisionType,
  SpriteSheet,
  Animation,
  range,
} from "excalibur";
import { Resources } from "./resources.js";

export class Street extends Actor {
  offset;
  constructor() {
    super();
    const streetAnimation = SpriteSheet.fromImageSource({
      image: Resources.BgImg,
      grid: { rows: 1, columns: 4, spritewidth: 800, spriteheight: 600 },
    });
    const showAnimation = Animation.fromSpriteSheet(
      streetAnimation,
      range(1, 4),
      80
    );

    this.graphics.add("showAnimation", showAnimation);
    this.graphics.use(showAnimation);
  }

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
    this.graphics.anchor = new Vector(0, 0);
    this.graphics.add(groupstreetIMG);
    this.pos = new Vector(0, 180);
    this.vel = new Vector(-200, 0);
    this.scale = new Vector(0.9, 0.9);
  }

  onPostUpdate(engine, delta) {
    if (this.pos.x < -this.offset * 1) {
      this.pos = new Vector(0, 180);
    }
  }
}

// width: Resources.FloorIMG.width * 2,
// height: Resources.FloorIMG.height,
// collisionType: CollisionType.Active,
