import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { Body, Caption } from "../../ui/tipography";
import {
  CarouselImage,
  CarouselSlide,
  CarouselSlider,
  CarouselWrapper,
  Dot,
  Dots,
  StyledArrow,
} from "./styled";

type ArrowProps = {
  left?: boolean;
  onClick: (event: React.MouseEvent<SVGSVGElement>) => void;
  disabled: boolean;
};

function Arrow({ left, onClick, disabled }: ArrowProps) {
  return (
    <StyledArrow
      left={left}
      onClick={onClick}
      disabled={disabled}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </StyledArrow>
  );
}

export interface CarouselProps {
  carHiglights: {
    title: string;
    content: string;
    image: string;
  }[];
}
export function CarouselComponent({ carHiglights }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 1.08,
    },
  });

  const finalSlide = carHiglights.length - 1;
  return (
    <CarouselWrapper>
      <CarouselSlider ref={sliderRef} className="keen-slider">
        {carHiglights.map((feature, idx) => (
          <CarouselSlide
            key={idx}
            className={`keen-slider__slide ${
              idx === currentSlide ? "current-slide" : ""
            } ${idx === finalSlide ? "final-slide" : ""}`}
          >
            <CarouselImage src={feature.image} alt={`Slide ${idx + 1}`} />
            <Caption>{feature.title}</Caption>
            <Body>{feature.content.replace(/<[^>]*>/g, "")}</Body>
          </CarouselSlide>
        ))}
      </CarouselSlider>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.prev();
            }}
            disabled={currentSlide === 0}
          />
          <Arrow
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.next();
            }}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
      {loaded && instanceRef.current && (
        <Dots>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <Dot
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              active={currentSlide === idx}
            />
          ))}
        </Dots>
      )}
    </CarouselWrapper>
  );
}
