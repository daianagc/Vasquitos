import "../../../styles/DonationsSection.css";

const DonationsSection = () => {
  return (
    <section className="donations-section">
      <div className="donations-title">
        <h3>Hacer una Donación</h3>
      </div>
      <div className="donations-parrafo">
        <p>
          Your generous donation helps us continue our mission to rescue,
          rehabilitate, and rehome dogs in need.
        </p>
      </div>
      <div className="donations-buttons-container">
        <button className="button-texto-donar">Donar Ahora</button>

        <button className="button-texto-mas">Conocer más</button>
      </div>
    </section>
  );
};

export default DonationsSection;
