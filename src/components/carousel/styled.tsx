import styled from "styled-components";

type ArrowProps = {
  $left?: boolean;
  disabled?: boolean;
};

type DotProps = {
  $active?: boolean;
};

export const CarouselSlider = styled.div<{ $isLastSlide: boolean }>`
  @media screen and (min-width: 1024px) {
    overflow: visible;
    padding-left: ${({ $isLastSlide }) => ($isLastSlide ? "0" : "25px")};
  }
  @media screen and (min-width: 1440px) {
    padding-left: ${({ $isLastSlide }) => ($isLastSlide ? "0" : "50px")};
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  background: #f7f7f7;
  padding: 50px 0;
`;
export const CarouselSlide = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  position: relative;
  padding: 0 15px;
  padding-right: 0px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f7f7f7c2;
    border-radius: 8px;
    pointer-events: none;
  }
  &.current-slide::after {
    background: none;
    transition: background 0.3s ease-in-out;
  }
  &.final-slide {
    padding-right: 15px;
  }
`;
export const CarouselImage = styled.img`
  height: 205px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  @media screen and (min-width: 1024px) {
    height: 146px;
  }
`;
export const StyledArrow = styled.svg<ArrowProps>`
  display: none;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  fill: #474747;
  cursor: pointer;
  ${({ $left }) => ($left ? "left: 5px;" : "right: 5px;")}
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Dots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
`;

export const Dot = styled.button<DotProps>`
  border: none;
  width: ${({ $active }) => ($active ? "30px" : "8px")};
  height: 8px;
  background: ${({ $active }) => ($active ? "var(--black-3)" : "#c5c5c5")};
  border-radius: ${({ $active }) => ($active ? "4px" : "50%")};
  margin: 0 2%;
  padding: 0px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
