import "../css/style.css";
import { Actor, Engine, Vector, Label, Font, Color, Physics } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { TitleScreen } from "./scenes/titlescreen";
import { Main } from "./scenes/game";
import { GameOver } from "./scenes/gameover";
export class Game extends Engine {
  constructor() {
    super({ width: 800, height: 700 });
    this.showDebug(true);
    Physics.useArcadePhysics();
    Physics.gravity = new Vector(0, 800);
    this.start(ResourceLoader).then(() => this.startGame());
    // als je geen plaatjes wil laden:
    // this.start().then(() => this.startGame())
  }

  startGame() {
    // voorbeeld tekstlabel
    this.addScene("titlescreen", new TitleScreen());
    this.goToScene("titlescreen");

    this.addScene("game-scene", new Main());
    this.goToScene("game-scene");

    this.addScene("gameover", new GameOver());

    // use gravety (false )
  }
}
new Game();
