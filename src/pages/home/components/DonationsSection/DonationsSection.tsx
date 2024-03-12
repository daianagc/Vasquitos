import "./DonationsSection.css";

const DonationsSection = () => {
  return (
    <section className="donations-section">
      <div className="donations-title">
        <h2>Podes realizar una donación</h2>
      </div>
      <div className="donations-parrafo">
        <p>
          Your generous donation helps us continue our mission to rescue,
          rehabilitate, and rehome dogs in need.
        </p>
      </div>
      <div className="donations-buttons-container">
        <button className="button-texto-donar">
          Tu donación nos ayuda mucho
        </button>
      </div>
    </section>
  );
};

export default DonationsSection;
