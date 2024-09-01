import CarouselItem from "./CarouselItem";
import useDrag from "../../hooks/drag";
import { CardDetail } from "./carousel-config";

export default function AutoplayCarousel({ cards }: { cards: CardDetail[] }) {
  const {
    isDragging,
    currentTranslate,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useDrag();

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(${currentTranslate}px)`,
        }}
      >
        {cards.map((cardDetail, i) => {
          return (
            <CarouselItem
              key={i}
              imgUrl={cardDetail.imgUrl}
              title={cardDetail.title}
              url={cardDetail.url}
              isDragging={isDragging}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}
