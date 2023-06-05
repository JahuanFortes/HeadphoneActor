import { Scene } from "excalibur";

export class TitleScreen extends Scene {
  onInitialize(engine) {
    console.log("the game over scene is created"); // only once
  }
  onActivate(ctx) {
    console.log("the game over scene is activated"); // every time the screen changes
  }
}
