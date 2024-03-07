import AutoplayCarousel from "../../../components/Carrusel/AutoplayCarousel";
import "../../../styles/SponsorsSection.css";

const SponsorsSection = () => {
  return (
    <section className="sponsors-section">
      <div className="sponsors-title">
        <h4>Nuestros Patrocinadores</h4>
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
