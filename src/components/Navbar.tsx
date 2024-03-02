import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logoVascos from "../img/VASCOS-ANIMALISTAS.ico";
import { useState } from "react";
import useIsMobile from "../hooks/is-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const items = [
    { to: "/nosotros", label: "Nosotros" },
    { to: "/nuestrosvasquitos", label: "Nuestros Vasquitos" },
    { to: "/socios", label: "Socios" },
    { to: "/padrinos", label: "Padrinos" },
    { to: "/contacto", label: "Contacto" },
  ];

  const setDisplay = () => {
    if (isMobile) {
      return isOpen ? { display: "" } : { display: "none" };
    } else {
      return { display: "" };
    }
  };

  return (
    <nav className="nav-list">
      <div className="container-logo">
        <img className="logoVascos" src={logoVascos} alt="LogoVascos" />
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <ul className="ul-list" style={setDisplay()}>
          <li className="list-item-mobile">
            <button className="button-mobile">
              <p>DONAR AHORA</p>
            </button>
          </li>
          {items.map((item, index) => (
            <li key={index}>
              <Link className="nav-link" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="button-donar">
        <p>DONAR AHORA</p>
      </button>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
