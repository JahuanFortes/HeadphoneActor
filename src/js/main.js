import "../css/style.css";
import { Actor, Engine, Vector, Label, Font, Color } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Background } from "./background";

export class Game extends Engine {
  constructor() {
    super({ width: 800, height: 700 });
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

    //#region background
    const bgImgsky = new Background();
    this.add(bgImgsky);

    const bgImgBuild2 = new Background();
    this.add(bgImgBuild2);

    const bgImgBuild3 = new Background();
    this.add(bgImgBuild3);

    const bgImgBuild4 = new Background();
    this.add(bgImgBuild4);

    const bgImgBuild5 = new Background();
    this.add(bgImgBuild5);

    const bgImgBuild6 = new Background();
    this.add(bgImgBuild6);
    //#endregion background

    //player
    const player = new Actor();
    player.graphics.use(Resources.toSprite);
  }
}

new Game();
