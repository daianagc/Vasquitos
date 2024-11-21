export interface CardDetail {
  logo: string;
  name: string;
  url?: string;
}

export interface CardItemProps extends CardDetail {
  key: number;
  isDragging: boolean;
  onMouseDown: (event: React.MouseEvent) => void;
  onMouseMove: (event: React.MouseEvent) => void;
  onMouseUp: (event: React.MouseEvent) => void;
  onMouseLeave: (event: React.MouseEvent) => void;
  onTouchStart: (event: React.TouchEvent) => void;
  onTouchMove: (event: React.TouchEvent) => void;
  onTouchEnd: (event: React.TouchEvent) => void;
}

export const repeatCards = (cards: CardDetail[]) =>
  cards.concat(cards, cards, cards, cards);
