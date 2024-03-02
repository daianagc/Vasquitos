import { NavLink } from "react-router-dom";
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
    { to: "/padrinos", label: "Patrocinadores" },
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
      <div className="container-Logo">
        <img className="logoVascos" src={logoVascos} alt="LogoVascos" />
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <ul className="ul-list" style={setDisplay()}>
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <button className="button-Donar">
        <NavLink to="/donaciones">
          <p>DONAR AHORA</p>
        </NavLink>
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
