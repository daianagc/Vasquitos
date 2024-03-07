import CarouselItem from "./CarouselItem";
import { cardDetails } from "./carousel-config";

export default function AutoplayCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {cardDetails.map((cardDetail) => {
          return (
            <CarouselItem
              key={cardDetail.title}
              imgUrl={cardDetail.imgUrl}
              title={cardDetail.title}
            ></CarouselItem>
          );
        })}
        {cardDetails.map((cardDetail) => {
          return (
            <CarouselItem
              key={cardDetail.title}
              imgUrl={cardDetail.imgUrl}
              title={cardDetail.title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}
