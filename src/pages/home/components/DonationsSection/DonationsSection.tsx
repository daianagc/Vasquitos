import { NavLink } from "react-router-dom";
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
        <NavLink to="/donaciones" className="button-texto-donar">
          Tu donación nos ayuda mucho
        </NavLink>
      </div>
    </section>
  );
};

export default DonationsSection;
