import "../../css/style.css";
import {
  Actor,
  Engine,
  Vector,
  Label,
  Font,
  Color,
  Physics,
  Timer,
  FontUnit,
} from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { Background } from "../background";
import { Street } from "../street";
import { Platform } from "../platform";
// import { Enemy } from "../enemy";
import { Obstacle } from "../obstacle";
import { Player } from "../player";
import { BGM } from "../bgm";
import { Scene } from "excalibur";

export class Main extends Scene {
  game;
  score = 0;
  scoreText;
  constructor() {
    super({ width: 800, height: 700 });
  }
  onInitialize(engine) {
    // voorbeeld tekstlabel
    this.game = engine;
    let textField = new Label({
      font: new Font({
        family: "Biome",
        size: 32,
        color: Color.White,
      }),
    });

    this.scoreText = new Label({
      text: "Start!",
      font: new Font({
        unit: FontUnit.Px,
        family: "Biome",
        size: 28,
        color: Color.White,
      }),
      pos: new Vector(250, 100),
    });

    const bgm = new BGM();
    Resources.BGM.play(0.2);
    this.add(bgm);

    //#region background
    const bgImg = new Background();
    this.add(bgImg);
    //#endregion background

    const streetIMG = new Street();
    this.add(streetIMG);

    const platform = new Platform();
    this.add(platform);

    // const enemy = new Enemy();
    // this.add(enemy);

    const obstacle = new Obstacle(100);
    this.add(obstacle);

    const obstacle2 = new Obstacle(700);
    this.add(obstacle2);

    //#region player
    const player = new Player();
    this.add(player);
    //#endregion player

    const timer = new Timer({
      fcn: () => this.addScore(),
      repeats: true,
      interval: 1000,
    });
    this.add(timer);
    timer.start();
    this.add(textField);
    this.add(this.scoreText);
  }
  addScore() {
    this.score++;
    let data = {
      score: this.score,
    };
    this.scoreText.text = `Time passed: ${this.score} 's`;
    localStorage.setItem("score", JSON.stringify(data));
  }
}
