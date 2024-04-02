import "./OurDogsSection.css";
import vasquito1 from "../../../../public/images/alondra.jpg";
import vasquito2 from "../../../../public/images/chucky.jpg";
import vasquito3 from "../../../../public/images/zoe.jpg";
import vasquito4 from "../../../../public/images/pinina.jpg";
import vasquito5 from "../../../../public/images/jacinta.jpg";
import vasquito6 from "../../../../public/images/manolo.jpg";
import { PetIcon } from "../../../../public/icons/PetIcon";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { fadeInAnimation, fadeInRightAnimation } from "../../../../animations";
import { NavLink } from "react-router-dom";

const OurDogsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  const fadeInRight = useSpring(fadeInRightAnimation(inView));
  const fadeIn = useSpring(fadeInAnimation);

  return (
    <section className="section-principal">
      <div ref={ref} className="container-dogs-principal">
        <animated.h2 style={fadeInRight}>
          Conocé a nuestros Vasquitos
        </animated.h2>
        <animated.p style={fadeInRight} className="parrafo-dogs-principal">
          Ellxs le dan sentido a nuestro día a día. Ingresá y conocelos, tal vez
          encuentres a tu próximx mejor amigx.
        </animated.p>
        <div className="container-button-vasquitos">
          <NavLink to="/nuestros-vasquitos" className="button-ver-vasquitos">
            Conocelos
            <PetIcon />
          </NavLink>
        </div>
      </div>
      <animated.div style={fadeIn} className="container-vasquitos">
        <img className="vasquito-uno" src={vasquito1} alt="vasquito1" />
        <img className="vasquito-dos" src={vasquito2} alt="vasquito2" />
        <img className="vasquito-tres" src={vasquito3} alt="vasquito3" />
        <img className="vasquito-cuatro" src={vasquito4} alt="vasquito4" />
        <img className="vasquito-cinco" src={vasquito5} alt="vasquito5" />
        <img className="vasquito-seis" src={vasquito6} alt="vasquito6" />
      </animated.div>
    </section>
  );
};

export default OurDogsSection;
