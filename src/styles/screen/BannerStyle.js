import styled from "styled-components";
import { flexCenter, maxWidth } from "../variables";

export const BannerSection = styled.section`
  overflow: hidden;
  position: relative;
  ${flexCenter}
`;
export const BannerSlide = styled.div`
  display: flex;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 370px;
    object-fit: cover;
  }
`;
export const ButtonWrap = styled.div`
  position: absolute;
  top: 47.5%;
  ${maxWidth}
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  left: ${(props) => (props.left ? "18%" : "")};
  right: ${(props) => (props.left ? "" : "18%")};
  background-color: transparent;
  border: none;
  font-size: 25px;
  color: white;
  margin: 0 20px;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
export const DotButtons = styled.div`
  position: absolute;
  bottom: 10px;
  left: 47%;
  z-index: 50;
  button {
    margin: 0 3px;
    background-color: #8b8b8b86;
    padding: 5px;
    border-radius: 5555px;
    border: none;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
