import { BannerSection, BannerSlide } from "../styles/screen/BannerStyle";
import Slider from "react-slick";

export default function Banner() {
  const imgUrl = "/img/";
  return (
    <BannerSection>
      <BannerSlide>
        <img src={imgUrl + "1.jpg"} alt={"banner"} />
        <img src={imgUrl + "2.jpg"} alt={"banner"} />
        <img src={imgUrl + "3.jpg"} alt={"banner"} />
        <img src={imgUrl + "4.jpg"} alt={"banner"} />
        <img src={imgUrl + "5.jpg"} alt={"banner"} />
        <img src={imgUrl + "6.jpg"} alt={"banner"} />
      </BannerSlide>
    </BannerSection>
  );
}
