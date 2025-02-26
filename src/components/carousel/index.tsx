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
      $left={left}
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
  const [activeSlidesNumber, setActiveSlidesNumber] = useState(1);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
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
    breakpoints: {
      "(min-width: 600px)": {
        slides: {
          perView: 2.08,
        },
        created() {
          setLoaded(true);
          setActiveSlidesNumber(2);
        },
        optionsChanged() {
          setActiveSlidesNumber(2);
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3.2,
        },
        created() {
          setLoaded(true);
          setActiveSlidesNumber(3);
        },
        optionsChanged() {
          setActiveSlidesNumber(3);
        },
      },
      "(min-width: 1440px)": {
        slides: {
          perView: 4.3,
          spacing: 20,
        },
        created() {
          setLoaded(true);
          setActiveSlidesNumber(4);
        },
        optionsChanged() {
          setActiveSlidesNumber(4);
        },
      },
    },
  });
  const totalSlides = carHiglights.length;
  const dots = totalSlides - activeSlidesNumber + 1;

  const finalSlide = carHiglights.length - 1;

  return (
    <CarouselWrapper>
      <CarouselSlider
        $isLastSlide={currentSlide + activeSlidesNumber >= totalSlides}
        ref={sliderRef}
        className="keen-slider"
      >
        {carHiglights.map((feature, idx) => {
          const bodyTextWithoutTags = feature.content.replace(/<[^>]*>/g, "");
          const isInView =
            idx >= currentSlide && idx < currentSlide + activeSlidesNumber;
          return (
            <CarouselSlide
              key={idx}
              className={`keen-slider__slide ${
                isInView ? "current-slide" : ""
              } ${idx === finalSlide ? "final-slide" : ""}`}
            >
              <CarouselImage src={feature.image} alt={`Slide ${idx + 1}`} />
              <Caption>{feature.title}</Caption>
              <Body>{bodyTextWithoutTags}</Body>
            </CarouselSlide>
          );
        })}
      </CarouselSlider>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => {
              e.stopPropagation();
              if (instanceRef.current) {
                const slider = instanceRef.current;
                const newIndex = Math.max(currentSlide - 1, 0);
                slider.moveToIdx(newIndex);
              }
            }}
            disabled={currentSlide === 0}
          />
          <Arrow
            onClick={(e) => {
              e.stopPropagation();
              if (instanceRef.current) {
                const slider = instanceRef.current;
                const newIndex = Math.min(currentSlide + 1, finalSlide);
                slider.moveToIdx(newIndex, true, { duration: 500 });
                setCurrentSlide(newIndex);
              }
            }}
            disabled={currentSlide + activeSlidesNumber >= totalSlides}
          />
        </>
      )}
      {loaded && instanceRef.current && (
        <Dots>
          {[...Array(dots).keys()].map((idx) => (
            <Dot key={idx} $active={currentSlide === idx} />
          ))}
        </Dots>
      )}
    </CarouselWrapper>
  );
}
