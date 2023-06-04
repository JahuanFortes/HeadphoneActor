import { ImageSource, Sound, Resource, Loader } from "excalibur";

import bgImg from "../images/10.png";
import streetImg from "../images/Lamp-Sprite1.png";

const Resources = {
  BgImg: new ImageSource(bgImg),
  StreetIMG: new ImageSource(streetImg),
  GroundTest: new ImageSource(groundTest),
};

const ResourceLoader = new Loader([
  Resources.BgImgBuild10,
  Resources.StreetIMG,
]);

export { Resources, ResourceLoader };
