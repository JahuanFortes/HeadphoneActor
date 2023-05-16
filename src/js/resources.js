import { ImageSource, Sound, Resource, Loader } from "excalibur";
import bgImage from "../images/10.png";

const Resources = {
  BgImg: new ImageSource(bgImage),
};
const ResourceLoader = new Loader([Resources.BgImg]);

export { Resources, ResourceLoader };
