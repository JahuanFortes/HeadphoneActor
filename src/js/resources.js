import { ImageSource, Sound, Resource, Loader } from "excalibur";
import bgImg from "../images/10.png";
import color from "../images/background.png";
import streetImg from "../images/Sprite-Street-Sheet1.png";
import player from "../images/Sprite-test.png";
import rock from "../images/Sprite-0002-rock.png";
import heart from "../images/heart-pixel-art-254x254.png";
import bgm from "../sounds/Headphone-Actor-Chiptune-Arr.mp3";

const Resources = {
  BgImg: new ImageSource(bgImg),
  Color: new ImageSource(color),
  StreetIMG: new ImageSource(streetImg),
  Player: new ImageSource(player),
  Rock: new ImageSource(rock),
  Heart: new ImageSource(heart),
  BGM: new Sound(bgm),
};

const ResourceLoader = new Loader([
  Resources.BgImg,
  Resources.Color,
  Resources.StreetIMG,
  Resources.Player,
  Resources.Rock,
  Resources.Heart,
  Resources.BGM,
]);

export { Resources, ResourceLoader };
