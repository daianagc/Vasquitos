import AutoplayCarousel from "../../../../components/Carrusel/AutoplayCarousel";
import "./SponsorsSection.css";

const SponsorsSection = () => {
  return (
    <section className="sponsors-section">
      <div className="sponsors-title">
        <h2>Nuestros Patrocinadores</h2>
      </div>
      <div className="sponsors-parrafo">
        <p>We are grateful for the generous support of our sponsors.</p>
      </div>
      <div className="sponsors-carrusel">
        <AutoplayCarousel />
      </div>
    </section>
  );
};

export default SponsorsSection;
