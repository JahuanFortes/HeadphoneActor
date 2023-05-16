import "../css/style.css";
import { Actor, Engine, Vector, Label, Font, Color } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Background } from "./background";

export class Game extends Engine {
  constructor() {
    super({ width: 1080, height: 600 });
    this.start(ResourceLoader).then(() => this.startGame());
    // als je geen plaatjes wil laden:
    // this.start().then(() => this.startGame())
  }

  startGame() {
    // voorbeeld tekstlabel
    let textField = new Label({
      font: new Font({
        family: "Arial",
        size: 32,
        color: Color.White,
      }),
    });
    textField.text = `Score: 0`;
    textField.pos = new Vector(20, 30);
    this.add(textField);

    //background
    const bgImg = new Background();
    this.add(bgImg);

    // const test = new Actor();
    // test.graphics.use(Resources.BgImg.toSprite());
    // test.pos = new Vector(400, 200);
    // test.scale = new Vector(0.4, 0.4);
    // this.add(test);

    //background moving
    // test.vel.x = -5;

    //player
    const player = new Actor();
    player.graphics.use(Resources.toSprite);
  }
}

new Game();
