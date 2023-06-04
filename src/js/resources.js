import { ImageSource, Sound, Resource, Loader } from "excalibur";
import bgImageSky from "../images/1.png";
import bgImgBuild2 from "../images/2.png";
import bgImgBuild3 from "../images/3.png";
import bgImgBuild4 from "../images/4.png";
import bgImgBuild5 from "../images/5.png";
import bgImgBuild6 from "../images/6.png";
import bgImgBuild10 from "../images/10.png";
import floorImg from "../images/Lamp-Sprite1.png";
import groundTest from "../images/Sprite-0001.png";

const Resources = {
  BgImgSky: new ImageSource(bgImageSky),
  BgImgBuild2: new ImageSource(bgImgBuild2),
  BgImgBuild3: new ImageSource(bgImgBuild3),
  BgImgBuild4: new ImageSource(bgImgBuild4),
  BgImgBuild5: new ImageSource(bgImgBuild5),
  BgImgBuild6: new ImageSource(bgImgBuild6),
  BgImgBuild10: new ImageSource(bgImgBuild10),
  FloorIMG: new ImageSource(floorImg),
  GroundTest: new ImageSource(groundTest),
};

const ResourceLoader = new Loader([
  Resources.BgImgSky,
  Resources.BgImgBuild2,
  Resources.BgImgBuild3,
  Resources.BgImgBuild4,
  Resources.BgImgBuild5,
  Resources.BgImgBuild6,
  Resources.BgImgBuild10,
  Resources.FloorIMG,
  Resources.GroundTest,
]);

export { Resources, ResourceLoader };
