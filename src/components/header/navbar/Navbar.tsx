import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logoVascos from "../../../public/img/VASCOS-ANIMALISTAS.ico";
import { useState } from "react";
import useIsMobile from "../../../hooks/is-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const items = [
    { to: "/", label: "Inicio" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/nuestros-vasquitos", label: "Nuestros Vasquitos" },
    { to: "/socios", label: "Socios" },
    { to: "/#patrocinadores", label: "Patrocinadores" },
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
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img className="logoVascos" src={logoVascos} alt="LogoVascos" />
        </Link>
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <ul className="ul-list" style={setDisplay()}>
          <li className="list-item-mobile">
            <NavLink
              to="/donaciones"
              className="button-mobile"
              onClick={() => setIsOpen(false)}
            >
              <p>DONAR AHORA</p>
            </NavLink>
          </li>
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive && item.label !== "Patrocinadores"
                    ? "nav-link active"
                    : "nav-link"
                }
                to={item.to}
                onClick={() => setIsOpen(false)}
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
