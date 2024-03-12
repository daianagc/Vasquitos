import "./OurDogsSection.css";
import vasquito1 from "../../../../public/img-dogs/uno.webp";
import vasquito2 from "../../../../public/img-dogs/dos.webp";
import vasquito3 from "../../../../public/img-dogs/tres.jpg";
import vasquito4 from "../../../../public/img-dogs/cuatro.jpg";
import vasquito5 from "../../../../public/img-dogs/cinco.jpg";
import vasquito6 from "../../../../public/img-dogs/seis.jpg";
import { PetIcon } from "../../../../public/icons/PetIcon";

const OurDogsSection = () => {
  return (
    <section className="section-principal">
      <div className="container-dogs-principal">
        <h2>Conocé a nuestros Vasquitos</h2>
        <p className="parrafo-dogs-principal">
          Browse through our list of adorable dogs waiting for their forever
          homes.
        </p>
        <div className="container-button-vasquitos">
          <button className="button-ver-vasquitos">
            Nuestros Vasquitos
            <PetIcon />
          </button>
        </div>
      </div>
      <div className="container-vasquitos">
        <img className="vasquito-uno" src={vasquito1} alt="vasquito1" />
        <img className="vasquito-dos" src={vasquito2} alt="vasquito2" />
        <img className="vasquito-tres" src={vasquito3} alt="vasquito3" />
        <img className="vasquito-cuatro" src={vasquito4} alt="vasquito4" />
        <img className="vasquito-cinco" src={vasquito5} alt="vasquito5" />
        <img className="vasquito-seis" src={vasquito6} alt="vasquito6" />
      </div>
    </section>
  );
};

export default OurDogsSection;
