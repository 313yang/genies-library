import styled from "styled-components";
import { flexCenter } from "../variables";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BannerSection = styled.section`
  overflow: hidden;
`;
export const BannerSlide = styled.div`
  display: flex;
  width: 100%;

  img {
    width: 100%;
    height: 370px;
    object-fit: cover;
  }
`;
