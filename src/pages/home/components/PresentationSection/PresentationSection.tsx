import "./PresentationSection.css";
import logo from "../../../../public/img/VASCOS-ANIMALISTAS.ico";

const PresentationSection = () => {
  return (
    <section className="principal-section">
      <div className="container-principal">
        <h1>Bienvenidos al refugio </h1>
        <img src={logo} alt="Logo del refugio" />
        <div className="container-parrafo">
          <p>
            We are a dedicated team of volunteers who rescue, rehabilitate, and
            rehome dogs in need.
          </p>
        </div>
        <div className="container-button">
          <button className="button-ver">¡Hacé click y conocenos!</button>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
