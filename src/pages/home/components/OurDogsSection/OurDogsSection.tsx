import "./OurDogsSection.css";
import vasquito1 from "../../../../public/img-dogs/uno.webp";
import vasquito2 from "../../../../public/img-dogs/dos.webp";
import vasquito3 from "../../../../public/img-dogs/tres.jpg";
import vasquito4 from "../../../../public/img-dogs/cuatro.jpg";
import vasquito5 from "../../../../public/img-dogs/cinco.jpg";
import vasquito6 from "../../../../public/img-dogs/seis.jpg";
import { PetIcon } from "../../../../public/icons/PetIcon";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { fadeInAnimation, fadeInRightAnimation } from "../../../../animations";

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
          <button className="button-ver-vasquitos">
            Conocelos
            <PetIcon />
          </button>
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
