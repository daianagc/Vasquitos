import imagenCevige from "../../public/images/cevige-logo.jpg";
import imagenMuni from "../../public/images/logo-municipalidad.jpg";
import imagenGeselec from "../../public/images/logo-geselect.jpg";

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
  {
    imgUrl: imagenGeselec,
    title: "Geselec",
    url: "https://josebats.wixsite.com/geselec/",
  },
];

export const cards: CardDetail[] = originalCards.concat(
  originalCards,
  originalCards,
  originalCards,
  originalCards,
  originalCards
);
