import { useState, useEffect, useRef } from "react";
import {
  BannerSection,
  BannerSlide,
  Button,
  ButtonWrap,
  DotButtons,
} from "../styles/screen/BannerStyle";
import "./classStyle.css";
export default function Banner() {
  const TOTAL_SLIDES = 5;
  const imgUrl = "./img/";
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBtn, setCurrentBtn] = useState(0);
  const slideRef = useRef(null);
  const dotRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
      setCurrentBtn(0);
      dotRef.current.childNodes[TOTAL_SLIDES].classList.remove("white");
    } else {
      setCurrentSlide(currentSlide + 1);
      setCurrentBtn(currentSlide + 1);
      dotRef.current.childNodes[currentBtn].classList.remove("white");
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
      setCurrentBtn(TOTAL_SLIDES);
      dotRef.current.childNodes[0].classList.remove("white");
    } else {
      setCurrentSlide(currentSlide - 1);
      setCurrentBtn(currentSlide - 1);
      dotRef.current.childNodes[currentBtn].classList.remove("white");
    }
  };
  const matchBtn = (e) => {
    const id = e.target.id;
    setCurrentSlide(+id);
    setCurrentBtn(+id);
    slideRef.current.style.transition = "transform 0.4s ease-in-out";
    slideRef.current.style.transform = `translateX( -${id}00%)`;
    const currentSlide = document.querySelector(".white");
    if (currentSlide) {
      currentSlide.classList.remove("white");
      e.target.classList.add("white");
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.3s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    dotRef.current.childNodes[currentBtn].classList.add("white");
    let id = setInterval(nextSlide, 3000);
    return () => clearInterval(id);
  });
  return (
    <BannerSection>
      <BannerSlide ref={slideRef}>
        <img src={imgUrl + "1.jpg"} alt={"banner"} />
        <img src={imgUrl + "2.jpg"} alt={"banner"} />
        <img src={imgUrl + "3.jpg"} alt={"banner"} />
        <img src={imgUrl + "4.jpg"} alt={"banner"} />
        <img src={imgUrl + "5.jpg"} alt={"banner"} />
        <img src={imgUrl + "6.jpg"} alt={"banner"} />
      </BannerSlide>
      <ButtonWrap>
        <Button left onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </Button>
        <Button onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </Button>
      </ButtonWrap>
      <DotButtons ref={dotRef}>
        <button onClick={matchBtn} id="0"></button>
        <button onClick={matchBtn} id="1"></button>
        <button onClick={matchBtn} id="2"></button>
        <button onClick={matchBtn} id="3"></button>
        <button onClick={matchBtn} id="4"></button>
        <button onClick={matchBtn} id="5"></button>
      </DotButtons>
    </BannerSection>
  );
}
