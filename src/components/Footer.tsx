import "../styles/Footer.css";
import { Link } from "react-router-dom";
import iconInstagram from "../img/icon-instagram.ico";
import iconFacebook from "../img/icon-facebook.ico";
import iconTiktok from "../img/icon-tiktok.ico";
import { MyMap } from "./Map";

const Footer = () => {
  return (
    <section>
      <div className="container-Footer">
        <footer className="footer">
          <div className="container">
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
                  <img
                    className="Icon-facebook"
                    src={iconFacebook}
                    alt="Icon"
                  />
                </Link>
              </i>
              <i>
                <Link className="tiktok" to="https://www.tiktok.com/es/">
                  <img className="Icon-tiktok" src={iconTiktok} alt="Icon" />
                </Link>
              </i>
            </div>
            <div className="texto-Footer">
              <p>Av. 14 n°2598</p>
              <p>vascosanimalistas@gmail.com</p>
              <p>2255-2324546</p>
            </div>
          </div>
          <div className="Mapa">
            <MyMap
              height={150}
              defaultCenter={[-37.27046112725326, -56.993164051984074]}
              defaultZoom={15}
              width={370}
              anchor={[-37.27046112725326, -56.993164051984074]}
              markerWidth={60}
            />
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
