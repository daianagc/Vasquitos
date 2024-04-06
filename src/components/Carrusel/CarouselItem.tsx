import { CardDetail } from "./carousel-config";

export default function CarouselItem({ imgUrl, title, url }: CardDetail) {
  const goToUrl = (url: string | undefined) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="carousel-card" title="Visitá su página web">
      <img src={imgUrl} alt={title} onClick={() => goToUrl(url)}></img>
      <p>{title}</p>
    </div>
  );
}
