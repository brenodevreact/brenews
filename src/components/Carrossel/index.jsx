import React, { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

const Slide = styled.div`
  flex: 0 0 100%;
`;

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <CarouselContainer>
      <SlideContainer
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide key={index}>{slide}</Slide>
        ))}
      </SlideContainer>
      <button onClick={prevSlide}>Anterior</button>
      <button onClick={nextSlide}>Próximo</button>
    </CarouselContainer>
  );
};

export default Carousel;
