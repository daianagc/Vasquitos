import "../../../styles/PresentationSection.css";

const PresentationSection = () => {
  return (
    <section className="principal-section">
      <div className="container-principal">
        <h1>Bienvenidos al refugio</h1>
        <div className="container-parrafo">
          <p>
            We are a dedicated team of volunteers who rescue, rehabilitate, and
            rehome dogs in need.
          </p>
        </div>
        <div className="container-button">
          <button className="button-ver">Ver más </button>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
