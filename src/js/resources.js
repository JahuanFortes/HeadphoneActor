import { ImageSource, Sound, Resource, Loader } from "excalibur";
import BgImg from "../images/10.png";

const Resources = {
  bgImg: new ImageSource(BgImg),
};
const ResourceLoader = new Loader([Resources.bgImg]);

export { Resources, ResourceLoader };
