import React, { useRef } from "react";
import PropTypes from "prop-types";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

function Carousel(props) {
  const carouselRef = useRef(null);

  const slideRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
  };

  const slideLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
  };

  return (
    <section
      id={props.sectionId}
      className={`py-10  ${
        props.dark
          ? "bg-neutral-700 text-neutral-100"
          : "bg-neutral-100 text-neutral-800"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10 text-3xl">
          {/* Titolo */}
          <h2 className={`font-bold ${props.dark ? "text-emerald-600" : ""}`}>
            {props.title}
          </h2>

          {/* Indicatori */}
          <div className="flex gap-5 justify-center items-center">
            <FaChevronCircleLeft
              onClick={slideLeft}
              className="cursor-pointer"
            />
            <FaChevronCircleRight
              onClick={slideRight}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Carosello */}
        <div className="overflow-x-hidden" ref={carouselRef}>
          <div className="flex min-w-max gap-10">
            {props.array.map((item, index) => (
              <ProductCard product={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Carousel.propTypes = {
  sectionId: PropTypes.string,
  dark: PropTypes.bool,
  title: PropTypes.string,
  array: PropTypes.arrayOf(PropTypes.object),
};

export default Carousel;
