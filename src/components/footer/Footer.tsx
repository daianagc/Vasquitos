import "./Footer.css";
import { Link } from "react-router-dom";
import iconInstagram from "../../public/img/icon-instagram.ico";
import iconFacebook from "../../public/img/icon-facebook.ico";
import iconTiktok from "../../public/img/icon-tiktok.ico";
import { MyMap } from "../map/Map";
import useIsMobile from "../../hooks/is-mobile";
import Logo from "../../public/img/logo-dai.png";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="container-Icons">
            <i>
              <Link
                className="instagram"
                to="https://www.instagram.com/vascosanimalistasvg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon-instagram"
                  src={iconInstagram}
                  alt="Icon"
                />
              </Link>
            </i>
            <i>
              <Link
                className="facebook"
                to="https://www.facebook.com/groups/4057353810991475"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon-facebook" src={iconFacebook} alt="Icon" />
              </Link>
            </i>
            <i>
              <Link className="tiktok" to="https://www.tiktok.com/es/">
                <img className="icon-tiktok" src={iconTiktok} alt="Icon" />
              </Link>
            </i>
          </div>
          <div className="texto-footer">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Avenida+15+N°2364+-+Villa+Gesell,+Bs.+As."
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 Avenida 15 N°2364 - Villa Gesell, Bs. As.
            </a>
            <a href="mailto:vascosanimalistasvg@gmail.com">
              📩 vascosanimalistasvg@gmail.com
            </a>
            <a
              href="https://wa.me/542255417409"
              target="_blank"
              rel="noopener noreferrer"
            >
              ☎️ 02255-417409
            </a>
          </div>
        </div>
        <div className="Mapa">
          <MyMap
            height={150}
            defaultCenter={[-37.267562770471166, -56.994550275002275]}
            defaultZoom={16}
            width={!isMobile ? 370 : 230}
            anchor={[-37.267562770471166, -56.994550275002275]}
            markerWidth={!isMobile ? 30 : 40}
          />
        </div>
      </footer>
      <div className="container-signature">
        <p>Creado con ❤️ por</p>
        <img className="logo-dai" src={Logo} alt="logo" />
      </div>
    </>
  );
};

export default Footer;
