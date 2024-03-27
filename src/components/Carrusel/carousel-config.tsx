import imagenCevige from "../../public/img/cevige-logo.jpg";
import imagenMuni from "../../public/img/logo-municipalidad.jpg";

export interface CardDetail {
  imgUrl: string;
  title: string;
  url?: string;
}

const originalCards: CardDetail[] = [
  {
    imgUrl: imagenCevige,
    title: "Cevige Ltda",
    url: "https://www.prensacevige.com/",
  },

  {
    imgUrl: imagenMuni,
    title: "Municipalidad de Villa Gesell",
    url: "https://www.gesell.gob.ar/",
  },
];

export const cards: CardDetail[] = originalCards.concat(
  originalCards,
  originalCards,
  originalCards,
  originalCards,
  originalCards
);
