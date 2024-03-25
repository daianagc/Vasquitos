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

const OurDogsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  const fadeInRight = useSpring({
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translate3d(0%,0,0)" : "translate3d(100%,0,0)",
    },
    config: { duration: 1000 }, // Configure the duration of the animation
  });
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 }, // Configure the duration of the animation
  });

  return (
    <section className="section-principal">
      <div ref={ref} className="container-dogs-principal">
        <animated.h2 style={fadeInRight}>
          Conocé a nuestros Vasquitos
        </animated.h2>
        <animated.p style={fadeInRight} className="parrafo-dogs-principal">
          Browse through our list of adorable dogs waiting for their forever
          homes.
        </animated.p>
        <div className="container-button-vasquitos">
          <button className="button-ver-vasquitos">
            Nuestros Vasquitos
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
