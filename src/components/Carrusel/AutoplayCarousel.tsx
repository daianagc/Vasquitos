import CarouselItem from "./CarouselItem";
import { cards } from "./carousel-config";

export default function AutoplayCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {cards.map((cardDetail, i) => {
          return (
            <CarouselItem
              key={i}
              imgUrl={cardDetail.imgUrl}
              title={cardDetail.title}
              url={cardDetail.url}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}
