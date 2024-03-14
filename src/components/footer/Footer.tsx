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
              <Link className="instagram" to="https://www.instagram.com/">
                <img
                  className="icon-instagram"
                  src={iconInstagram}
                  alt="Icon"
                />
              </Link>
            </i>
            <i>
              <Link className="facebook" to="https://www.facebook.com/">
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
            <p>📍 Av. 14 n°2598</p>
            <p>📩 vascosanimalistas@gmail.com</p>
            <p>☎️ 2255-232454</p>
          </div>
        </div>
        <div className="Mapa">
          <MyMap
            height={150}
            defaultCenter={[-37.27046112725326, -56.993164051984074]}
            defaultZoom={16}
            width={!isMobile ? 370 : 230}
            anchor={[-37.27046112725326, -56.993164051984074]}
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
