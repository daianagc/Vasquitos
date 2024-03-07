import { CardDetail } from "./carousel-config";

export default function CarouselItem({ imgUrl, title }: CardDetail) {
  return (
    <div className="carousel-card">
      <img src={imgUrl} alt={title}></img>
    </div>
  );
}
