import styled from "styled-components";

export const BannerSection = styled.section`
  overflow: hidden;
  position: relative;
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
export const Button = styled.button`
  position: absolute;
  top: 47.5%;
  left: ${(props) => (props.left ? "18%" : "")};
  right: ${(props) => (props.left ? "" : "18%")};
  background-color: transparent;
  border: none;
  font-size: 25px;
  max-width: 1280px;
  color: white;
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
  }
`;
