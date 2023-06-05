import { ImageSource, Sound, Resource, Loader } from "excalibur";
import bgImg from "../images/10.png";
import streetImg from "../images/Sprite-Street-Sheet1.png";
import player from "../images/Sprite-test.png";
import bgm from "../sounds/test.mp3";

const Resources = {
  BgImg: new ImageSource(bgImg),
  StreetIMG: new ImageSource(streetImg),
  Player: new ImageSource(player),
  BGM: new Sound(bgm),
};

const ResourceLoader = new Loader([
  Resources.BgImg,
  Resources.StreetIMG,
  Resources.Player,
  Resources.BGM,
]);

export { Resources, ResourceLoader };
