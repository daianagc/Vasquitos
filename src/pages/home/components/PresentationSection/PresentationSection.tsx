import "./PresentationSection.css";
import logo from "../../../../public/img/VASCOS-ANIMALISTAS.ico";
import presentation from "../../../../public/img/presentation.jpeg";
import { NavLink } from "react-router-dom";

const PresentationSection = () => {
  return (
    <section className="principal-section">
      <h1>Bienvenidos al refugio </h1>
      <div className="presentation-main">
        <div className="container-principal">
          <img src={logo} alt="Logo del refugio" />
          <div className="container-parrafo">
            <p>
              We are a dedicated team of volunteers who rescue, rehabilitate,
              and rehome dogs in need.
            </p>
          </div>
          <div className="container-button">
            <NavLink to="/nosotros" className="button-ver">
              ¡Hacé click y conocenos!
            </NavLink>
          </div>
        </div>
        <img
          className="presentation-image"
          src={presentation}
          alt="Imagen de presentación"
        />
      </div>
    </section>
  );
};

export default PresentationSection;
