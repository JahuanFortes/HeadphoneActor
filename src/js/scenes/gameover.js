import {
  Scene,
  Actor,
  Engine,
  Vector,
  Label,
  Color,
  Font,
  Input,
  FontUnit,
} from "excalibur";
import { Resources } from "../resources.js";
export class GameOver extends Scene {
  game;
  constructor() {
    super({ width: 800, height: 700 });
  }

  onInitialize(engine) {
    console.log("Game Over");
    this.game = engine;
    const color = new Actor();
    color.graphics.use(Resources.Color.toSprite());
    color.pos = new Vector(500, 400);
    color.scale = new Vector(3, 3);
    this.add(color);

    //text field:
    let bigText1 = new Label({
      text: "You DIED",
      pos: new Vector(90, 100),
      font: new Font({
        family: "Biome",
        size: 80,
        color: Color.Red,
        unit: FontUnit.Px,
      }),
    });
    const previous = JSON.parse(localStorage.getItem("score"));
    if (previous) {
      console.log(previous.score);
    }

    this.scoreText = new Label({
      text: `You lasted ${previous.score} S`,
      font: new Font({
        unit: FontUnit.Px,
        family: "Biome",
        size: 28,
        color: Color.White,
      }),
      pos: new Vector(200, 200),
    });
    this.add(this.scoreText);

    let textField2 = new Label({
      text: "Press F5 to Retry",
      pos: new Vector(90, 250),
      font: new Font({
        family: "Biome",
        size: 20,
        color: Color.White,
        unit: FontUnit.Px,
      }),
    });

    this.add(bigText1);
    this.add(textField2);
    textField2.actions.blink(200, 200, 10);
  }
}
