import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logoVascos from "../img/VASCOS-ANIMALISTAS.ico";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav-list">
      <div className="container-Logo">
        <img className="logoVascos" src={logoVascos} alt="LogoVascos" />
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <ul className="ul-list" style={{ display: isOpen ? "" : "none" }}>
          <li>
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="nosotros">
              Nosotros
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="nuestrosvasquitos">
              Nuestros Vasquitos
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="socios">
              Socios
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="padrinos">
              Padrinos
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <button className="button-Donar">
        <NavLink to="/">
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
