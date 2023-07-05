import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "@/components/helpers";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const imageCards = [
{id: '1', url: "/assets/icons/car.png", label: "Ride", className: ""},
{id: '2', url: "/assets/icons/car.png", label: "Pink Ride", className: ""},
{id: '3', url: "/assets/icons/car.png", label: "Ride AC", className: ""},
{id: '4', url: "/assets/icons/car.png", label: "Auto", className: ""},
]

const Index: React.FC = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={false}
      autoPlay={false} // Modify this condition based on the prop value
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      deviceType="desktop" // Modify this value based on the prop value
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-10-px"
    >
      {imageCards.map((card) => (
        <Card id={card.id} className={card.className} label={card.label} url={card.url}/>
      ))}
    </Carousel>
  );
};

export default Index;
