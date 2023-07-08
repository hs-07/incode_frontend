
import React, { useState } from "react";

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
  {
    id: "1",
    url: "/assets/icons/car-2.svg",
    label: "Ride",
    className: "bg-[#E2F4FF]",
    cardName: "car",
  },
  {
    id: "2",
    url: "/assets/icons/car-2.svg",
    label: "Pink Ride",
    className: "bg-[#FFE2F5]",
    cardName: "pinkCar",
  },
  {
    id: "3",
    url: "/assets/icons/ac-car.svg",
    label: "Ride AC",
    className: "bg-[#E2F4FF]",
    cardName: "acCar",
  },
  {
    id: "4",
    url: "/assets/icons/auto.svg",
    label: "Auto",
    className: "bg-[#E2F4FF]",
    cardName: "auto",
  },
];

const Index: React.FC = () => {
  const [activeCard, setActiveCard] = useState("");

  const handleTabClick = (cardName: string) => {
    setActiveCard(cardName);
  };
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
        <button onClick={() => handleTabClick(card.cardName)}  className="w-full">
        <Card
          id={card.id}
          className={
            activeCard === card.cardName
              ? `${card.className} active`
              : ""
          }
          label={card.label}
          url={card.url}
        />
        </button>

      ))}
    </Carousel>
  );
};

export default Index;
