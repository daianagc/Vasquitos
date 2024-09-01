import { useState } from "react";
import { CardItemProps } from "./carousel-config";

export default function CarouselItem({
  key,
  imgUrl,
  title,
  url,
  isDragging,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onMouseLeave,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}: CardItemProps) {
  const [mouseDownTime, setMouseDownTime] = useState<number | null>(null);

  const goToUrl = (url: string | undefined) => {
    if (url) window.open(url, "_blank");
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setMouseDownTime(Date.now());
    if (onMouseDown) onMouseDown(e);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const mouseUpTime = Date.now();
    if (mouseDownTime && mouseUpTime - mouseDownTime < 200) {
      // Adjust the duration as needed
      goToUrl(url);
    }
    setMouseDownTime(null);
    if (onMouseUp) onMouseUp(e);
  };

  return (
    <div
      className="carousel-card"
      title="Visitá su página web"
      key={key}
      onMouseDown={handleMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <img
        src={imgUrl}
        alt={title}
        onMouseDown={(e) => e.preventDefault()}
        onMouseMove={(e) => e.preventDefault()}
        onMouseUp={(e) => e.preventDefault()}
      ></img>
      <p>{title}</p>
    </div>
  );
}
