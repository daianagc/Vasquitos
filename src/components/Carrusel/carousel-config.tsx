import imagenCevige from "../../public/images/cevige-logo.jpg";
import imagenMuni from "../../public/images/logo-municipalidad.jpg";
import imagenGeselec from "../../public/images/logo-geselect.jpg";
import imagenFarmaciaDelSol from "../../public/images/logo-famarciadelsol.jpg";
import imagenJazminMacetas from "../../public/images/logo-jazmin-macetas.jpg";
import imagenPasteleraDelBosque from "../../public/images/logo-pastelera-del-bosque.jpg";
import imagenPitt from "../../public/images/logo-pitt.jpg";
import imagenAlbaYJulio from "../../public/images/logo-alba-y-julio.jpg";
import imagenLaComarca from "../../public/images/logo-la-comarca.jpg";
import imagenElGalpon from "../../public/images/logo-el-galpon.jpg";
import imagenDeliciasAnaby from "../../public/images/logo-delicias-anaby.jpg";

export interface CardDetail {
  imgUrl: string;
  title: string;
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

const firstRowSponsors: CardDetail[] = [
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
  {
    imgUrl: imagenFarmaciaDelSol,
    title: "Farmacia Del Sol",
    url: "https://www.facebook.com/farmacia.delsol/?locale=es_LA",
  },
  {
    imgUrl: imagenJazminMacetas,
    title: "Jazmin Macetas",
    url: "https://www.instagram.com/jazminmacetas/",
  },
  {
    imgUrl: imagenPasteleraDelBosque,
    title: "Pastelera Del Bosque",
    url: "https://www.instagram.com/lapasteleradelbosque/?hl=es",
  },
  {
    imgUrl: imagenPitt,
    title: "Pitt",
    url: "https://www.instagram.com/pitteldepredador/",
  },
  {
    imgUrl: imagenAlbaYJulio,
    title: "Alba y Julio",
    url: "https://www.instagram.com/albayjulio.tualmacen/",
  },
  {
    imgUrl: imagenLaComarca,
    title: "La Comarca",
    url: "https://www.instagram.com/lacomarcavillagesell/",
  },
  {
    imgUrl: imagenElGalpon,
    title: "El Galpón",
    url: "https://www.instagram.com/papelera.el.galpon/?hl=es",
  },
  {
    imgUrl: imagenDeliciasAnaby,
    title: "Delicias Anaby",
    url: "https://www.instagram.com/deliciasanaby/",
  },
];

export const firstRowCards: CardDetail[] = firstRowSponsors.concat(
  firstRowSponsors,
  firstRowSponsors,
  firstRowSponsors,
  firstRowSponsors,
  firstRowSponsors
);
