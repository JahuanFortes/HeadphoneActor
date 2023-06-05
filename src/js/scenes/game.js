import "../../css/style.css";
import { Actor, Engine, Vector, Label, Font, Color, Physics } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { Background } from "../background";
import { Street } from "../street";
import { Platform } from "../platform";
import { Player } from "../player";
import { BGM } from "../bgm";
import { Scene } from "excalibur";

export class Main extends Scene {
  game;
  constructor() {
    super({ width: 800, height: 700 });
  }
  onInitialize(engine) {
    // voorbeeld tekstlabel
    this.game = engine;
    let textField = new Label({
      font: new Font({
        family: "points",
        size: 32,
        color: Color.White,
      }),
    });

    const bgm = new BGM();
    // Resources.BGM.play(0.7);
    this.add(bgm);

    //#region background
    const bgImg = new Background();
    this.add(bgImg);
    //#endregion background

    const streetIMG = new Street();
    this.add(streetIMG);

    const platform = new Platform();
    this.add(platform);

    //#region player
    const player = new Player();
    this.add(player);
    //#endregion player

    textField.text = `Score: 0`;
    textField.pos = new Vector(20, 30);
    this.add(textField);
  }
  // use gravety (false )
}
