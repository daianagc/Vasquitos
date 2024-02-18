import "../styles/Footer.css";
import { Link } from "react-router-dom";
import iconInstagram from "../img/icon-instagram.ico";
import iconFacebook from "../img/icon-facebook.ico";
import iconTiktok from "../img/icon-tiktok.ico";

const Footer = () => {
  return (
    <section>
      <div>
        <footer className="footer">
          <div className="container-Icons">
            <i>
              <Link className="instagram" to="https://www.instagram.com/">
                <img
                  className="Icon-instagram"
                  src={iconInstagram}
                  alt="Icon"
                />
              </Link>
            </i>
            <i>
              <Link className="facebook" to="https://www.facebook.com/">
                <img className="Icon-facebook" src={iconFacebook} alt="Icon" />
              </Link>
            </i>
            <i>
              <Link className="tiktok" to="https://www.tiktok.com/es/">
                <img className="Icon-tiktok" src={iconTiktok} alt="Icon" />
              </Link>
            </i>
          </div>
          <div className="texto-Footer">
            <p className="Parrafo-Footer">
              © 2024. Todos los derechos reservados
            </p>
          </div>
          <div className="Mapa"></div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
