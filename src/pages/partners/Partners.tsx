import "./Partners.css";
import rescued3 from "../../public/images/lucy.jpg";
import rescued4 from "../../public/images/uma.jpg";
import rescued5 from "../../public/images/linda.jpg";

export const Partners = () => {
  const partnerLink = import.meta.env.VITE_PARTNER_LINK;

  return (
    <div className="container">
      <div className="content partners-content">
        <h1 className="title-h1">Convertite en socix</h1>
        <p className="paragraph partners-special-paragraph">
          Asociándote nos ayudás a seguir rescatando y cuidando a los perritos
          que más lo necesitan.
        </p>
        <div>
          <span className="title-h2">Tu aporte de </span>
          <span className="title-h2 strong-text">$3000 mensuales </span>
          <span className="title-h2">nos ayuda a marcar la diferencia</span>
        </div>
        <div className="cards-wrapper">
          <div className="card">
            <h2 className="card-icon">🐾</h2>
            <h2 className="title-h2">Alimentos</h2>
            <p className="paragraph">
              Necesario para que tengan la mejor calidad de vida posible.
            </p>
            <img
              className="rescued-partner-image"
              src={rescued3}
              alt="Imagen de un vasquito"
            />
          </div>
          <div className="card">
            <h2 className="card-icon">💊</h2>
            <h2 className="title-h2">Medicamentos</h2>
            <p className="paragraph">
              Importante para tratamientos y eventualidades de salud.
            </p>
            <img
              className="rescued-partner-image"
              src={rescued4}
              alt="Imagen de un vasquito"
            />
          </div>
          <div className="card">
            <h2 className="card-icon">🏡</h2>
            <h2 className="title-h2">Mantenimiento</h2>
            <p className="paragraph">
              Para que tengan un lugar seguro y cómodo para vivir.
            </p>
            <img
              className="rescued-partner-image"
              src={rescued5}
              alt="Imagen de un vasquito"
            />
          </div>
        </div>

        <div className="submit-container">
          <h4 className="info">
            Serás redirigidx a Donar Online para completar la subscripción.
          </h4>
          <button
            className="partner-button"
            title="¡Hace click para hacerte socix y hacer felices a los vasquitos!"
          >
            <a
              className="partner-link"
              href={partnerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"¡Quiero ser socix!"}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
