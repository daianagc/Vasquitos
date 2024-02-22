import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logoVascos from "../img/VASCOS-ANIMALISTAS.ico";

const Navbar = () => {
  return (
    <nav className="nav-list">
      <div className="div">
        <div className="container-Logo">
          <img className="logoVascos" src={logoVascos} alt="LogoVascos" />
        </div>
        <ul className="ul-list">
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
    </nav>
  );
};

export default Navbar;
